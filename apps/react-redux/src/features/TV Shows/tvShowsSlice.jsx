import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    tvShows:[],
    tvShowDetails: {},
    selectedTvShow: null,
    fetched: false
}

const tvShowsSlice = createSlice ({
    name: "tvShows",
    initialState,
    reducers: {
        addTvShows: (state, {payload}) => {
            state.tvShows = payload;
            state.fetched = true;
        },
        addSingleTvShowDetail: (state, { payload }) => {
            state.tvShowDetails[payload.id] = payload;
          },
          setSelectedTvShow: (state, { payload }) => {
            state.selectedTvShow = payload;
          },
    },
});

export const {addTvShows, addSingleTvShowDetail, setSelectedTvShow} = tvShowsSlice.actions;
export default tvShowsSlice.reducer;
export const selectTvShows = (state) => state.tvShows;
export const selectTvDetails = (state) => state.tvShows.tvShowDetails;
export const selectedTvShow = (state) => state.tvShows.selectedTvShow;