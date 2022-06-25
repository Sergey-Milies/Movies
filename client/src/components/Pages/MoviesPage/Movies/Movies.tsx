import {FC} from "react";
import {useAppSelector} from "../../../../app/Redux/hooks";
import {getMovies} from "../../../../app/Redux/moviesSlice/moviesSlice";
import {Grid} from "@mui/material";
import MoviesItem from "./MoviesItem/MoviesItem";
import NoData from "../../../UI/NoData/NoData";

const Movies: FC = () => {
    const movies = useAppSelector(getMovies);

    return (
        <Grid container spacing={2}>
            {movies.length ? movies.map(movie => <MoviesItem key={movie.id} movie={movie} />) : <NoData />}
        </Grid>
    );
}

export default Movies;