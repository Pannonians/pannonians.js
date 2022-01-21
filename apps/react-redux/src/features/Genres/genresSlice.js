import { createSlice } from "@reduxjs/toolkit";
import { movie as movieApi } from "../../api";
import { tv as tvApi } from "../../api"
import axios from "axios";

const initialState = {
  movieGenres: [],
  tvShowGenres: []
 
};

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    addMovieGenres: (state, { payload }) => {
      state.movieGenres = payload;
    },
    addTvShowGenres: (state, { payload }) => {
      state.tvShowGenres = payload;
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

export const fetchMovieGenres = () => async (dispatch, getState) => {
  const allMovieGenres = selectMovieGenres(getState());
  if ( allMovieGenres.length > 0 ) return
  const { url } = movieApi.get.genres;
  const { data } = await axios.get(url);
  dispatch(addMovieGenres(data.genres));
};

export const fetchTvShowGenres = () => async (dispatch, getState) => {
  const allTvShowGenres = selectTvShowGenres(getState());
  if ( allTvShowGenres.length > 0 ) return
  const { url } = tvApi.get.genres;
  const { data } = await axios.get(url);
  dispatch(addTvShowGenres(data.genres));
};