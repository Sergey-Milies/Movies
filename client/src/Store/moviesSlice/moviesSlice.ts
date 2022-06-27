import {createSlice} from '@reduxjs/toolkit';
import { RootState } from '../store';
import {IMoviesState} from './moviesType';
import {getAllMovies, getSingleMovie} from "./moviesThunks";
import {IMovies} from "../../Types/Movies";


const initialState: IMoviesState = {
  movies: [],
  movie: {},
  loading: true,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
      clearMovie: (state) => {
          console.log('redux unmount');
          state.movie = [];
      }
  },

  extraReducers: (builder) => {
    builder
        .addCase(getAllMovies.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(getAllMovies.fulfilled, (state, action) => {
          state.movies = action.payload;
          state.loading = false;
        })
        .addCase(getSingleMovie.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getSingleMovie.fulfilled, (state, action) => {
            state.movie = action.payload;
            state.loading = false;
        })
  },
});

// Actions
export const { clearMovie } = moviesSlice.actions;

// Reducer
export default moviesSlice.reducer;


export const getMovies = (state: RootState) => state?.movies?.movies;
export const getMovie = (state: RootState) => state?.movies?.movie;
export const isLoading = (state: RootState) => state?.movies?.loading;