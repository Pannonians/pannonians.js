import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { movie as movieApi } from "../../api";
import { tv as tvApi } from "../../api"
import { useDispatch, useSelector } from "react-redux";

import {
    addMovieGenres,
    addTvShowGenres,
    selectMovieGenres,
    selectTvShowGenres
} from "./genresSlice";

export default function Genres() {
  const movieGenresList = useSelector(selectMovieGenres);
  const tvShowGenresList = useSelector(selectTvShowGenres);
  const dispatch = useDispatch();
 
  

  useEffect(() => {
    if (!dispatch) return;

    
    if (movieGenresList.fetched && tvShowGenresList.fetched) return;
    
    try {
      const getGenres = async () => {
      const { url } = movieApi.get.genres;
      const { url: tvUrl } = tvApi.get.genres
      const responses = await Promise.all([ 
      axios.get(url),
      axios.get(tvUrl)
      ]);
      const [{data: response}, {data: tvResponse}] = responses
     
      
    dispatch(addMovieGenres(response));
    dispatch(addTvShowGenres(tvResponse));
  };
  getGenres();
    
    } catch (error) {
      console.log("Error", error
      )
    };
    console.log("movieGenresList", movieGenresList);
    console.log("tvShowGenresList", tvShowGenresList);
    
  }, [ dispatch]);

  const displyMovieGenres = movieGenresList.genres?.map(genre => {
    return (
      <div>
       <h4>{genre.name}</h4>
    </div>
    );
    
  });

  // const displyTvShowGenres = tvShowGenresList.object.genres?.map(genre => {
  //   return (
  //     <div>
  //      <h4>{genre.name}</h4>
  //   </div>
  //   );
    
  // });


  return (
    <div>
      <h2>MOVIE GENRES</h2>
      <div>
      {displyMovieGenres}
      </div>
      {/* <h2>TV SHOW GENRES</h2>
      <div>
      {displyTvShowGenres}
      </div> */}
    </div>
  )
};