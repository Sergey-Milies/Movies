import {FC, useCallback, useEffect, useState} from "react";
import Filters from "./Filters/Filters";
import Movies from "./Movies/Movies";
import {useAppDispatch, useAppSelector} from "../../../../Store/hooks";
import {getMovies} from "../../../../Store/moviesSlice/moviesSlice";
import {getAllMovies} from "../../../../Store/moviesSlice/moviesThunks";
import {IMovies} from "../../../../Types/Movies";
import {Box, SelectChangeEvent} from "@mui/material";
import {
    dateFilterAction,
    languageFilterAction,
    popularityFilterAction,
    voteCountFilterAction
} from "../../../../Helpers/FiltersActions";

const MoviesPage:FC = () => {
    const dispatch = useAppDispatch();
    const movies = useAppSelector(getMovies);
    const [moviesArr, setMoviesArr] = useState<IMovies[]>([]);
    const [date, setDate] = useState<any>('');
    const [popularity, setPopularity] = useState<any>('');
    const [language, setLanguage] = useState<any>('');
    const [vote_count, setVoteCount] = useState<any>('');

    useEffect(() => {
        dispatch(getAllMovies());
    }, []);

    useEffect(() => {
        setMoviesArr(movies);
        filterHandler();
    }, [movies]);

    useEffect(() => {
        filterHandler();
    }, [date, popularity, language, vote_count]);

    const filterHandler = useCallback(() => {
        let filtered_movies = [...movies];
        if(date) filtered_movies = dateFilterAction(filtered_movies, date);

        if(popularity) filtered_movies = popularityFilterAction(filtered_movies, popularity);

        if(language) filtered_movies = languageFilterAction(filtered_movies, language);

        if(vote_count) filtered_movies = voteCountFilterAction(filtered_movies, vote_count);

        setMoviesArr(filtered_movies);
    }, [movies, date, popularity, language, vote_count]);

    return (
        <Box component='div'>
            <Filters
                date={date}
                popularity={popularity}
                language={language}
                vote_count={vote_count}
                onChangeDate={(e: SelectChangeEvent<HTMLSelectElement>) => setDate(e.target.value)}
                onChangePopularity={(e: SelectChangeEvent<HTMLSelectElement>) => setPopularity(e.target.value)}
                onChangeLanguage={(e: SelectChangeEvent<HTMLSelectElement>) => setLanguage(e.target.value)}
                onChangeVoteCount={(e: SelectChangeEvent<HTMLSelectElement>) => setVoteCount(e.target.value)}
            />
            <Movies movies={moviesArr} />
        </Box>
    );
}

export default MoviesPage;