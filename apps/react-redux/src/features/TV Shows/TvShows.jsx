import React from "react";
import axios from "axios";
import { tv } from "../../api";
import { useEffect } from "react";
import { tv as tvApi, tvSeason } from "../../api";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
  selectSeason
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
    const { data } = await axios.get(url(selectedTvShowDetails.id, seasonNumber));
    dispatch(addSingleSeason({
      tvShowId: selectedTvShowDetails.id,
      seasonNumber, 
      details: data,
    }));
    console.log(singleSeasonDetails);
}; 
const setSeasonDetails = async (tvSeason) => {
  if (Object.keys(singleSeasonDetails).includes(tvSeason.id)) {
    dispatch(setSelectedSeasonDetails(singleSeasonDetails[tvSeason.id]));
    return;
  }
  const { url } = tvSeason.get.discover;
  const { data: response } = await axios.get(url(tvSeason.seasonNumber));

  dispatch(setSelectedSeasonDetails(response));
};
  

  return (
    <div className="d-flex d-flex-start p-5">
      <div style={{ minWidth: 400 }}>
        <NavLink to="/">Back</NavLink>
        <div>
          {allTvShows.tvShows.length > 0 &&
            allTvShows.tvShows.map((tvShow, index) => (
              <div
                style={{ cursor: "pointer" }}
                onClick={() => getDetails(tvShow)}
                key={index}
              >
                {tvShow.name}
              </div>
            ))}
          {allTvShows.tvShows.length === 0 ? <div>Loading</div> : null}
        </div>
      </div>
      <div className="row ms-5">
        {!selectedTvShowDetails ? (
          "Click on a tvShow to see details"
        ) : (
          <div>
            <h2>{selectedTvShowDetails.name}</h2>
            <div>{selectedTvShowDetails.overview}</div>
            {selectedTvShowDetails.seasons.length >= 0 && selectedTvShowDetails.seasons.map((season, index) => (
              <div key={index} onClick={() => setTvSeason(season.season_number) } >
                <button onClick={() => setSeasonDetails(tvSeason.id)}>
                {season.name} 
                </button >
              </div>))}
          </div>
        )}
      </div>
    </div>
  )
};
