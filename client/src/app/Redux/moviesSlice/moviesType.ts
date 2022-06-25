import {IMovies} from "../../Types/Movies";

export interface IMoviesState {
    movies: IMovies[],
    loading: boolean;
}