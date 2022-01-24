import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tvShows: [],
  tvShowDetails: {},
  selectedTvShow: null,
  fetched: false,
  selectedSeason: null,
  seasonDetails: {},
};

const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState,
  reducers: {
    addTvShows: (state, { payload }) => {
      state.tvShows = payload;
      state.fetched = true;
    },
    addSingleTvShowDetail: (state, { payload }) => {
      state.tvShowDetails[payload.id] = payload;
    },
    setSelectedTvShow: (state, { payload }) => {
      state.selectedTvShow = payload;
    },
    addSingleSeason: (state, { payload }) => {
      const { tvShowId, seasonNumber, details } = payload;
      if (state.tvShowDetails[tvShowId].seasonDetails === undefined)
        state.tvShowDetails[tvShowId].seasonDetails = {};
      state.tvShowDetails[tvShowId].seasonDetails[seasonNumber] = details;
      state.selectedTvShow = state.tvShowDetails[tvShowId];
      state.selectedSeason = details;
    },
    setSelectedSeasonDetails: (state, { payload }) => {
      state.seasonDetails = payload;
    },
    setSelectedSeason: (state, { payload }) => {
        state.selectedSeason = payload
    },
  },
});

export const {
  addTvShows,
  addSingleTvShowDetail,
  setSelectedTvShow,
  addSingleSeason,
  setSelectedSeasonDetails,
  setSelectedSeason,
} = tvShowsSlice.actions;
export default tvShowsSlice.reducer;
export const selectTvShows = (state) => state.tvShows;
export const selectTvDetails = (state) => state.tvShows.tvShowDetails;
export const selectedTvShow = (state) => state.tvShows.selectedTvShow;
export const selectedSeasonDetails = (state) => state.tvShows.selectedSeason;
