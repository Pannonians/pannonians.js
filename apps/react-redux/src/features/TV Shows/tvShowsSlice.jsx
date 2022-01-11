import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    tvShows:[],
    fetched: false
}

const tvShowsSlice = createSlice ({
    name: "tvShows",
    initialState,
    reducers: {
        addTvShows: (state, {payload}) => {
            state.tvShows = payload;
            state.fetched = true;
        }
    }
});

export const {addTvShows} = tvShowsSlice.actions;
export default tvShowsSlice.reducer;