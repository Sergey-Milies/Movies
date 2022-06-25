import {FC, useEffect} from "react";
import Filters from "./Filters/Filters";
import Movies from "./Movies/Movies";
import {Box} from "@mui/material";
import {useAppDispatch} from "../../../app/Redux/hooks";
import {getAllMovies} from "../../../app/Redux/moviesSlice/moviesThunks";

const MoviesPage:FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllMovies());
    }, []);

    return (
        <Box component='div'>
            <Filters />
            <Movies />
        </Box>
    );
}

export default MoviesPage;