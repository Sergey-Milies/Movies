import {createSlice} from '@reduxjs/toolkit';
import { RootState } from '../store';
import {IMoviesState} from './moviesType';
import {getAllMovies} from "./moviesThunks";


const initialState: IMoviesState = {
  movies: [],
  loading: true,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {

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
  },
});

// Actions
export const {  } = moviesSlice.actions;

// Reducer
export default moviesSlice.reducer;


export const getMovies = (state: RootState) => state?.movies?.movies;
export const isLoading = (state: RootState) => state?.movies?.loading;


