import React from "react";
import axios from "axios";
import { tv } from "../../api";
import { useEffect } from "react";
import { tv as tvApi, tvSeason } from "../../api";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SimpleDateTime from "react-simple-timestamp-to-date";
import {
  addTvShows,
  addSingleTvShowDetail,
  setSelectedTvShow,
  selectTvShows,
  selectTvDetails,
  selectedTvShow,
  addSingleSeason,
  setSelectedSeasonDetails,
  selectedSeasonDetails,
  setSelectedSeason,
} from "../TV Shows/tvShowsSlice";

export default function TvShows() {
  const allTvShows = useSelector(selectTvShows);
  const singleTvShowDetails = useSelector(selectTvDetails);
  const selectedTvShowDetails = useSelector(selectedTvShow);
  const singleSeasonDetails = useSelector(selectedSeasonDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dispatch) return;

    // if tvShows are fetched, don't fetch
    if (allTvShows.fetched) return;
    const getTvShows = async () => {
      const { url } = tv.get.discover;
      const response = await axios.get(url);
      dispatch(addTvShows(response.data.results));
    };

    getTvShows();
  }, [allTvShows, dispatch]);

  const getDetails = async (tv) => {
    dispatch(setSelectedSeason({}));
    if (Object.keys(singleTvShowDetails).includes(tv.id.toString())) {
      dispatch(setSelectedTvShow(singleTvShowDetails[tv.id]));
      return;
    }

    // Perform fetch to get the tvShow details
    const { url } = tvApi.get.single;
    const { data: response } = await axios.get(url(tv.id));

    // Store in redux tvShow details and set selected tvShow
    // to be the one we just click on
    dispatch(addSingleTvShowDetail(response));
    dispatch(setSelectedTvShow(response));
  };

  const setTvSeason = async (seasonNumber) => {
    const { url } = tvSeason.get.discover;
    const { data } = await axios.get(
      url(selectedTvShowDetails.id, seasonNumber)
    );
    dispatch(
      addSingleSeason({
        tvShowId: selectedTvShowDetails.id,
        seasonNumber,
        details: data,
      })
    );
  };
  const setSeasonDetails = async (seasonNumber) => {
    if (
      singleSeasonDetails &&
      Object.keys(singleSeasonDetails).includes(selectedTvShowDetails.id)
    ) {
      dispatch(
        setSelectedSeasonDetails(singleSeasonDetails[selectedTvShowDetails.id])
      );
      return;
    }
    const { url } = tvSeason.get.discover;
    const { data: response } = await axios.get(
      url(selectedTvShowDetails.id, seasonNumber)
    );

    dispatch(setSelectedSeasonDetails(response));
  };

  return (
    <div className="d-flex d-flex-start p-5">
      <div style={{ minWidth: 400 }}>
        <NavLink to="/" type="btn" className={"btn"}>Back</NavLink>
        <div className="movie-page">
         <div className="container">
          <div className="result-card">
           <div className="movie-grid">
             {allTvShows.tvShows.length > 0 &&
            allTvShows.tvShows.map((tvShow, index) => (
              <div
                style={{ cursor: "pointer" }}
                onClick={() => getDetails(tvShow)}
                key={index}
              >
                <div className="poster-wrapper">
              {tvShow.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${tvShow.poster_path}`}
                  alt={`${tvShow.title} Poster`}
                />
              ) : (
                <div className="filler-poster" />
              )}
            </div>
                <h5 className="movie-title">{tvShow.name}</h5>
              </div>
            ))}
          {allTvShows.tvShows.length === 0 ? <div>Loading</div> : null}
           </div>
          </div>
         </div>
        </div>
      </div>
      <div className="row ms-6" style={{width: "50%"}}>
        {!selectedTvShowDetails ? (
          <div style={{fontStyle: "italic"}}>"Click on a Tv Show to see details"</div>
        ) : (
          <div className="selected-movie">
            <h3 className="selected-movie-title">{selectedTvShowDetails.name}</h3>
            <div className="backdrop">
            <img
            src={`https://image.tmdb.org/t/p/w200${selectedTvShowDetails.backdrop_path}`}
            alt={`${selectedTvShowDetails.name} Backdrop`}
          />
            </div>
            <div className="poster">
        {selectedTvShowDetails.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${selectedTvShowDetails.poster_path}`}
            alt={`${selectedTvShowDetails.name} Poster`}
          />
         ) : (
          <div className="filler-poster" />
        )}
          </div>
            <div className="movie-details">{selectedTvShowDetails.tagline.length !== 0 ? <div>{JSON.stringify(selectedTvShowDetails.tagline, null, 4)}</div> : null}</div>
            <div className="movie-details">Overview: <br></br>{selectedTvShowDetails.overview}</div>
            <div className="movie-details">Last air date:
            <span style={{paddingLeft: "10px"}}>
            <SimpleDateTime
              dateSeparator="."
              timeSeparator=":"
              dateFormat="DMY"
              showTime="0"
            >{selectedTvShowDetails.last_air_date}
            </SimpleDateTime>
            </span>
            </div>
            {selectedTvShowDetails.seasons.length >= 0 &&
              selectedTvShowDetails.seasons.map((season, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setTvSeason(season.season_number);
                    setSeasonDetails(season.season_number);
                  }}
                >
                  <div>{season.name}</div>
                </div>
              ))}
            <hr />
            {singleSeasonDetails && singleSeasonDetails._id && (
              <div>
                <h2>Season {singleSeasonDetails.season_number}</h2>
                <hr />
                <div>
                  <ul>
                    {singleSeasonDetails.episodes.map((episode) => (
                      <div>
                        <div>
                          <strong>Episode {episode.episode_number}</strong> -{" "}
                          {episode.name}
                        </div>
                        <div>{episode.overview}</div>
                        <hr />
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
