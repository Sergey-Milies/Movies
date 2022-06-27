import {FC, useEffect} from "react";
import {Box, Card, CardContent, Grid, Typography} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import {IMovieViewPageTypeParams} from "./MovieViewPageType";
import {clearMovie, getMovie} from "../../../../Store/moviesSlice/moviesSlice";
import {useAppDispatch, useAppSelector} from "../../../../Store/hooks";
import {getSingleMovie} from "../../../../Store/moviesSlice/moviesThunks";
import {IMovies} from "../../../../Types/Movies";

const MovieViewPage: FC = () => {
    const dispatch = useAppDispatch();
    const movie = useAppSelector<any>(getMovie);
    const params = useParams<IMovieViewPageTypeParams>();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getSingleMovie(params.id));
    }, []);

    useEffect(() => {
        if(!movie) {
            if(dispatch(clearMovie())) navigate('/404');
        }
    }, [movie]);

    return (
        <Grid container spacing={2} sx={{my: 2}}>
            <Grid item xs={4}>
                <Card>
                    <CardContent>
                        <img src={movie?.poster_path} style={{width: '100%'}} />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={8}>
                <Card>
                    <CardContent>
                        <Typography variant='h5'>{movie?.original_title}</Typography>
                        <Box component='div' sx={{my:2}}>
                            <Typography variant='body2' sx={{my: 1}}><b>Release Date:</b> {movie?.release_date}</Typography>
                            <Typography variant='body2' sx={{my: 1}}><b>Vote Average:</b> {movie?.vote_average}</Typography>
                            <Typography variant='body2' sx={{my: 1}}><b>Vote Count:</b> {movie?.vote_count}</Typography>
                            <Typography variant='body2' sx={{my: 1}}><b>Language:</b> {movie?.original_language}</Typography>
                            <Typography variant='body2' sx={{my: 1}}><b>Popularity:</b> {movie?.popularity}</Typography>
                            <Typography variant='body2' sx={{my: 1}}><b>Media Type:</b> {movie?.media_type}</Typography>
                            <Typography variant='h6' sx={{mt: 3}}>Overview</Typography>
                            <Typography variant='body2' sx={{my: 1}}>{movie?.overview}</Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default MovieViewPage;