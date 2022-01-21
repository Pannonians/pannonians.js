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
 const allMovieGenres = useSelector(selectMovieGenres);
 const allTvShowGenres = useSelector(selectTvShowGenres);
 const dispatch = useDispatch();

 useEffect(() => {
     if (!dispatch) return;
     if (allMovieGenres.fetched && allTvShowGenres.fetched) return;
     const getGenres = async () => {
         const { url } = movieApi.get.genres;
         const { url: tvUrl } = tvApi.get.genres;
         const genresResponses = await Promise.all([
             axios.get(url),
             axios.get(tvUrl)]);
             const [{data: mgResponse}, {data}] = genresResponses
         dispatch(addMovieGenres(mgResponse));
         dispatch(addTvShowGenres(data))
         console.log("movieGenres", mgResponse);
         console.log("tvShowGenres", data);

     };
     getGenres();
    }, [dispatch]);

    
    
 

 
  return (
    <button>Dugme</button>
    
    
                
  );
    
}

