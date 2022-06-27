import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../Config/Axios";
import {IMovies} from "../../Types/Movies";

interface IGetAllMovies {
    title?: string,
}

export const getAllMovies = createAsyncThunk(
    'movies/get-all-movies',
    async (filters: IGetAllMovies | null = null) => {
        const movies = await api.get('/get-all-movies', { params: filters });
        return movies.data as IMovies[];
    }
);

export const getSingleMovie = createAsyncThunk(
    'counter/get-movie',
    async (id: string | undefined) => {
        const movies = await api.get('/get-movie', {params: { id }});
        return movies.data as IMovies | null;
    }
);