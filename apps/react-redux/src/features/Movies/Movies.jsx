import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { movie as movieApi } from "../../api";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SimpleDateTime from "react-simple-timestamp-to-date";
import Slider from "react-slick";
import {
  addSingleMovieDetail,
  selectDetails,
  selectedMovie,
  selectMovies,
  setSelectedMovie,
  addMovies,
} from "./movieSlice";
import { fetchMovieGenres, selectMovieGenres } from "../Genres/genresSlice";

export default function Movies() {
  const allMovies = useSelector(selectMovies);
  const singleMovieDetails = useSelector(selectDetails);
  const selectedMovieDetails = useSelector(selectedMovie);
  const movieGenresList = useSelector(selectMovieGenres);
  const dispatch = useDispatch();
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  useEffect(() => {
    if (!dispatch) return;
    dispatch(fetchMovieGenres());

    // if movies are fetched, don't fetch
    if (allMovies.fetched) return;
    const getMovies = async () => {
      const { url } = movieApi.get.discover;
      const response = await axios.get(url);
      dispatch(addMovies(response.data.results));
    };

    getMovies();
  }, [allMovies, dispatch]);

  const getDetails = async (movie) => {
    // Check if the movie detail is already cached,
    // if it is, don't fetch it again, instead, use the one in
    // redux to display on page (setSelectedMovie action)
    if (Object.keys(singleMovieDetails).includes(movie.id.toString())) {
      dispatch(setSelectedMovie(singleMovieDetails[movie.id]));
      return;
    }

    // Perform fetch to get the movie details

    const { url } = movieApi.get.single;
    const { url: creditUrl } = movieApi.get.credits;
    const responses = await Promise.all([
      axios.get(url(movie.id)),
      axios.get(creditUrl(movie.id)),
    ]);
    console.log(responses);

    const [{ data: response }, { data }] = responses;

    const completeMovieDetails = { ...response, credits: data };

    // Store in redux movie details and set selected movie
    // to be the one we just click on
    dispatch(addSingleMovieDetail(completeMovieDetails));
    dispatch(setSelectedMovie(completeMovieDetails));
  };

  return (
    <div className="d-flex d-flex-start p-5">
      <div style={{ minWidth: 400 }}>
        <NavLink to="/" type="btn" className={"btn"}>
          <i className="fas fa-arrow-alt-left"></i> Back
        </NavLink>
        <div className="movie-page">
          <div className="container">
            <div className="result-card">
              <div className="movie-grid">
                {allMovies.movies.length > 0 &&
                  allMovies.movies.map((movie) => (
                    <div
                      key={movie.id}
                      style={{ cursor: "pointer" }}
                      onClick={() => getDetails(movie)}
                    >
                      <div className="poster-wrapper">
                        {movie.poster_path ? (
                          <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={`${movie.title} Poster`}
                          />
                        ) : (
                          <div className="filler-poster" />
                        )}
                      </div>
                      <h5 className="movie-title">{movie.title}</h5>
                    </div>
                  ))}
                {allMovies.movies.length === 0 ? <div>Loading</div> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row ms-6" style={{ width: "50%" }}>
        {!selectedMovieDetails ? (
          <div style={{ fontStyle: "italic" }}>
            "Click on a movie to see details"
          </div>
        ) : (
          <div className="selected-movie">
            <h2 className="selected-movie-title">
              {selectedMovieDetails.title}
            </h2>
            <div className="backdrop">
              <img
                src={`https://image.tmdb.org/t/p/w200${selectedMovieDetails.backdrop_path}`}
                alt={`${selectedMovieDetails.title} Backdrop`}
              />
            </div>
            <div className="poster">
              {selectedMovieDetails.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${selectedMovieDetails.poster_path}`}
                  alt={`${selectedMovieDetails.title} Poster`}
                />
              ) : (
                <div className="filler-poster" />
              )}
            </div>
            <div className="movie-details">
              <h3>{selectedMovieDetails.tagline}</h3>
            </div>
            <div className="movie-details">
              <div style={{ fontStyle: "italic" }}>
                <h4>Overview: </h4>
              </div>
              {selectedMovieDetails.overview}
            </div>
            <div>
              <div className="movie-details">
                <div style={{ fontStyle: "italic" }}>
                  <h4>Genres: {[""]}</h4>
                </div>
              </div>
              {selectedMovieDetails.genres.map((genre) => (
                <ul>
                  <div>
                    <li key={genre.id}>
                      <h5>
                        {movieGenresList.find((g) => genre.id === g.id).name}
                      </h5>
                    </li>
                  </div>
                </ul>
              ))}
            </div>
            <div className="movie-details">
              <span style={{ fontStyle: "italic", fontSize: "24px" }}>
                Release date:{" "}
              </span>
              <span style={{ paddingLeft: "10px" }}>
                <SimpleDateTime
                  dateSeparator="."
                  timeSeparator=":"
                  dateFormat="DMY"
                  showTime="0"
                >
                  {selectedMovieDetails.release_date}
                </SimpleDateTime>
              </span>
            </div>
            <div style={{ fontStyle: "italic", paddingTop: "20px" }}>
                  <h4>Cast: </h4>
                </div>
                <div className="movie-details">
              {selectedMovieDetails.credits.cast.length !== 0 ? (
                
              
            <div className="movie-credits">
              <Slider
                {...settings}
                style={{
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingLeft: "80px",
                }}
              >
                
                {selectedMovieDetails?.credits.cast
                  .slice(0, 10)
                  .map((index) => (
                    <div key={index.id}>
                      {index.name}
                      <div>
                        {index.profile_path ? (
                          <img
                            src={`https://image.tmdb.org/t/p/w185${index.profile_path}`}
                            alt={`${index.name}`}
                          />
                        ) : (
                          <div className="profile-poster" />
                        )}
                      </div>
                    </div>
                  ))}
              </Slider>
            </div>) : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
