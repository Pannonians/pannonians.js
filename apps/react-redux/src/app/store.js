import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/Movies/movieSlice.jsx"
import tvShowsReducer from "../features/TV Shows/tvShowsSlice.jsx"


export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    tvShows: tvShowsReducer,
  } 
});