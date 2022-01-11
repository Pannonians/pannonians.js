import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  movieDetails: {},
  selectedMovie: null,
  fetched: false,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
      state.fetched = true;
    },
    addSingleMovieDetail: (state, { payload }) => {
      state.movieDetails[payload.id] = payload;
    },
    setSelectedMovie: (state, { payload }) => {
      state.selectedMovie = payload;
    },
  },
});

export default movieSlice.reducer;

export const {
  addMovies,
  addSingleMovieDetail,
  setSelectedMovie
} = movieSlice.actions;
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectMovies = (state) => state.movies;
export const selectDetails = (state) => state.movies.movieDetails;
export const selectedMovie = (state) => state.movies.selectedMovie;
