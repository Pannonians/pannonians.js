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
      state.tvShowGenres = payload;
      state.fetched = true;
    },
}
});

export default genresSlice.reducer;

export const {
  addMovieGenres,
  addTvShowGenres
 
} = genresSlice.actions;
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectMovieGenres = (state) => state.genres.movieGenres;
export const selectTvShowGenres = (state) => state.genres.tvShowGenres
