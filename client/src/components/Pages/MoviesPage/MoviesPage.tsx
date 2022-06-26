import {FC, useEffect, useState} from "react";
import Filters from "./Filters/Filters";
import Movies from "./Movies/Movies";
import {Box, SelectChangeEvent} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../../app/Redux/hooks";
import {getAllMovies} from "../../../app/Redux/moviesSlice/moviesThunks";
import {getMovies} from "../../../app/Redux/moviesSlice/moviesSlice";
import {IMovies} from "../../../app/Types/Movies";

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

    const filterHandler = () => {
        let filtered_movies = [...movies];
        if(date) {
            filtered_movies = filtered_movies.filter(movie => {
                const movie_date = movie.release_date.split('-');
                if(date == movie_date[0]) {
                    return movie;
                }
            });
        }
        if(popularity) {
            filtered_movies = filtered_movies.filter(movie => {
                const movie_popularity = popularity.split('-');
                if(movie.popularity >= movie_popularity[0] && movie.popularity <= movie_popularity[1]) {
                    return movie;
                }
            });
        }
        if(language) {
            filtered_movies = filtered_movies.filter(movie => {
                if(movie.original_language === language) {
                    return movie;
                }
            });
        }
        if(vote_count) {
            filtered_movies = filtered_movies.filter(movie => {
                const movie_vote_count = vote_count.split('-');
                if(movie.vote_count >= movie_vote_count[0] && movie.vote_count <= movie_vote_count[1]) {
                    return movie;
                }
            });
        }
        setMoviesArr(filtered_movies);
    }

    return (
        <Box component='div'>
            <Filters
                date={date}
                onChangeDate={(e: SelectChangeEvent<HTMLSelectElement>) => setDate(e.target.value)}
                popularity={popularity}
                onChangePopularity={(e: SelectChangeEvent<HTMLSelectElement>) => setPopularity(e.target.value)}
                language={language}
                onChangeLanguage={(e: SelectChangeEvent<HTMLSelectElement>) => setLanguage(e.target.value)}
                vote_count={vote_count}
                onChangeVoteCount={(e: SelectChangeEvent<HTMLSelectElement>) => setVoteCount(e.target.value)}
            />
            <Movies movies={moviesArr} />
        </Box>
    );
}

export default MoviesPage;