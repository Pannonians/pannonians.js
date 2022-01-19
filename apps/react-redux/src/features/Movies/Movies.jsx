import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { movie as movieApi } from "../../api"
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SimpleDateTime from "react-simple-timestamp-to-date";
import {
  addSingleMovieDetail,
  selectDetails,
  selectedMovie,
  selectMovies,
  setSelectedMovie,
  addMovies,
  addMovieCredit,
  selectedCredits,
} from "./movieSlice";
          



export default function Movies() {
  const allMovies = useSelector(selectMovies);
  const singleMovieDetails = useSelector(selectDetails);
  const selectedMovieDetails = useSelector(selectedMovie);
  const selectedMovieCredits = useSelector(selectedCredits);
  const dispatch = useDispatch();

  const arr = [];
  for (let i = 0; i < 50; i++) {
    arr.push(i);
  }

  useEffect(() => {
    if (!dispatch) return;

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
    // const { data: response } = await axios.get(url(movie.id));
    const { url: creditUrl } = movieApi.get.credits;
    // const { data } = await axios.get(creditUrl(movie.id));

    const promises = arr.map((i) => 
    axios.get(url(movie.id)),
    axios.get(creditUrl(movie.id))
    );
    const results = await Promise.all(promises);
    console.log(results);

      const completeMovieDetails = {...results};

    // Store in redux movie details and set selected movie
    // to be the one we just click on
    dispatch(addSingleMovieDetail(results));
    dispatch(setSelectedMovie(results));
    
  };


    const onClick = (movie) => {
      getDetails(movie);
      console.log("singleMovieDetails", selectedMovieDetails);
    }



  return (
    <div className="d-flex d-flex-start p-5">
      <div style={{ minWidth: 400 }}>
        <NavLink to="/" type="btn" className={"btn"}><i class="fas fa-arrow-alt-left"></i> Back</NavLink>
        <div className="movie-page">
        <div className="container">
        <div className="result-card">
        <div className="movie-grid">
          {allMovies.movies.length > 0 &&
            allMovies.movies.map((movie) => (
              <div
                key={movie.id}
                style={{ cursor: "pointer" }}
                onClick={() => onClick(movie)}
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
      <div className="row ms-6" style={{width: "50%"}}>
        {!selectedMovieDetails ? (
          <div style={{fontStyle: "italic"}}>"Click on a movie to see details"</div>
        ) : (
          <div className="selected-movie">
              <h3 className="selected-movie-title">{selectedMovieDetails.title}</h3>
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
            <div className="movie-details">{selectedMovieDetails.tagline}</div>
            <div className="movie-details"><div style={{fontStyle: "italic"}}>Overview: </div>{selectedMovieDetails.overview}</div>
            <div className="movie-details"><span style={{fontStyle: "italic"}}>Release date: </span>
            <span style={{paddingLeft: "10px"}}>
            <SimpleDateTime
              dateSeparator="."
              timeSeparator=":"
              dateFormat="DMY"
              showTime="0"
            >{selectedMovieDetails.release_date}
            </SimpleDateTime>
            </span>
            </div>
            <div className="movie-details"><div style={{fontStyle: "italic"}}>Movie Cast: 
            </div>{selectedMovieDetails.credits.cast.slice(0, 6).map((index) => (
              <div
                key={index}
              >{index.name}<br></br>
              <img src={`https://image.tmdb.org/t/p/w200${index.profile_path}`} alt={index.name} />
              </div>
            ))}
            </div>
           </div>
        )}
      </div>
    </div>
  );
}
