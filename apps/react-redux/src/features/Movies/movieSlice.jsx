import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    movies:[],
    fetched: false
}

const movieSlice = createSlice ({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload;
            state.fetched = true;
        }
    }
});

export const {addMovies} = movieSlice.actions;
export default movieSlice.reducer;
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectMovies = (state) => state.movies.response;