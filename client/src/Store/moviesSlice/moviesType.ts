import {IMovies} from "../../Types/Movies";

export type MovieType = IMovies | object | null;

export interface IMoviesState {
    movies: IMovies[],
    movie: MovieType,
    loading: boolean;
}