import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});


// import { configureStore } from "@reduxjs/toolkit";
// import moviesReducer from "./movies/movieSlice";

// export const store = configureStore({
//   reducer: {
//     movies: moviesReducer,
//     tvShows: tvShowsReducer
//   },
// });