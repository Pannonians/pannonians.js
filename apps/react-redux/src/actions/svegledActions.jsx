import {ActionTypes} from "../actions/svegledActions";

    export const getMovies = (movies) => {
        return {
            type: ActionTypes.GET_MOVIES,
            payload: movies,
        };
    };

    export const getSingleMovie = (movie) => {
        return {
            type: ActionTypes.GET_SINGLE_MOVIE,
            payload: movie,
        };
    };

    export const getMovieGenre = (movies) => {
        return {
            type: ActionTypes.GET_MOVIE_GENRE,
            payload: movies,
        };
    };

    export const getTvShows = (tvShows) => {
        return {
            type: ActionTypes.GET_TVSHOWS,
            payload: tvShows,
        };
    };

    export const getSingleTvShow = (tvShow) => {
        return {
            type: ActionTypes.GET_SINGLE_TVSHOW,
            payload: tvShow,
        };
    };

    export const getSingleTvShowSeason = (tvShow) => {
        return {
            type: ActionTypes.GET_SINGLE_TVSHOW_SEASON,
            payload: tvShow,
        };
    };