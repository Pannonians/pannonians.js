import React from "react";
import axios from "axios";
import { movie } from "../../api";
import { useEffect } from "react";
import { movie as movieApi } from "../../api";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addSingleMovieDetail,
  selectDetails,
  selectedMovie,
  selectMovies,
  setSelectedMovie,
  addMovies,
} from "./movieSlice";
          



export default function Movies() {
  const allMovies = useSelector(selectMovies);
  const singleMovieDetails = useSelector(selectDetails);
  const selectedMovieDetails = useSelector(selectedMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dispatch) return;

    // if movies are fetched, don't fetch
    if (allMovies.fetched) return;
    const getMovies = async () => {
      const { url } = movie.get.discover;
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
    const { data: response } = await axios.get(url(movie.id));

    // Store in redux movie details and set selected movie
    // to be the one we just click on
    dispatch(addSingleMovieDetail(response));
    dispatch(setSelectedMovie(response));
  };

  return (
    <div className="d-flex d-flex-start p-5">
      <div style={{ minWidth: 400 }}>
        <NavLink to="/">Back</NavLink>
        <div>
          {allMovies.movies.length > 0 &&
            allMovies.movies.map((movie, index) => (
              <div
                key={index}
                style={{ cursor: "pointer" }}
                onClick={() => getDetails(movie)}
              >
                {movie.title}
              </div>
            ))}
          {allMovies.movies.length === 0 ? <div>Loading</div> : null}
        </div>
      </div>
      <div className="row ms-5">
        {!selectedMovieDetails ? (
          "Click on a movie to see details"
        ) : (
          <div>
            <h2>{selectedMovieDetails.title}</h2>
            <div>{JSON.stringify(selectedMovieDetails.overview, null, 4)}</div>
          </div>
        )}
      </div>
    </div>
  );
}
