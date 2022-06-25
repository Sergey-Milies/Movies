import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../Config/Axios";
import {IMovies} from "../../Types/Movies";

interface IGetAllMovies {
    title?: string,
}

export const getAllMovies = createAsyncThunk(
    'counter/fetchCount',
    async (filters: IGetAllMovies | null = null) => {
        const movies = await api.get('/get-all-movies', { params: filters });
        return movies.data as IMovies[];
    }
);