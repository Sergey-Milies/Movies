import {FC} from "react";
import {Grid} from "@mui/material";
import MoviesItem from "./MoviesItem/MoviesItem";
import NoData from "../../../UI/NoData/NoData";
import {IMov} from "./MoviesTypes";

const Movies: FC<IMov> = ({ movies }) => {

    return (
        <Grid container spacing={2}>
            {movies.length ? movies.map(movie => <MoviesItem key={movie.id} movie={movie} />) : <NoData />}
        </Grid>
    );
}

export default Movies;