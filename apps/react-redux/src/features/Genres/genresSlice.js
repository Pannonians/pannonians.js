import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieGenres: {},
  tvShowGenres: {},
  fetched: false,
 
};

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    addMovieGenres: (state, { payload }) => {
      state.movieGenres = payload;
      state.fetched = true;
    },
    addTvShowGenres: (state, { payload }) => {
      state.tvShowGenres[payload] = payload;
      state.fetched = true;
    },
}
});

export default genresSlice.reducer;

export const {
  addMovieGenres,
  addTvShowGenres
 } = genresSlice.actions;

export const selectMovieGenres = (state) => state.genres.movieGenres;
export const selectTvShowGenres = (state) => state.genres.tvShowGenres;