import React from "react";
import axios from "axios";
import { movie } from "../../api";
import { useEffect, useState } from "react";
import { movie as movieApi } from "../../api";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectMovies } from "./movieSlice";
import { addMovies } from "../Movies/movieSlice";


export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [movieDetail, setMovieDetail] = useState(null);
  const allMovies = useSelector((selectMovies));
  const dispatch = useDispatch();

    useEffect(() => {
      const getMovies = async () => {
        const { url } = movie.get.discover;
        const response = await axios.get(url);
        setMovies(response.data.results);
        dispatch(addMovies(response.data.results));
      };
  
      getMovies();
    }, [dispatch]);

  const getDetails = async (movie) => {
    const { url } = movieApi.get.single;
    const { data: response } = await axios.get(url(movie.id));
    setMovieDetail(response);
  
  };
  
  
    
  return (
    <div className="d-flex d-flex-start p-5">
      <div style={{ minWidth: 400 }}>
        <NavLink to="/">Back</NavLink>
        <div>
          {movies.map((movie) => (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => getDetails(movie)}
            >
              {movie.title}
            </div>
          ))}
        </div>
      </div>
      <div className="row ms-5">
        {!movieDetail ? (
          "Click on a movie to see details"
        ) : (
          <div>
            <h2>{movieDetail.title}</h2>
            <div>{JSON.stringify(movieDetail, null, 4)}</div>
          </div>
        )}
      </div>
    </div>
  );
}
  

