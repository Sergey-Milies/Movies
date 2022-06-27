import {FC} from "react";
import {Box, Grid,Card,CardContent,CardMedia,Button,Typography,CardActions} from '@mui/material';
import {IMoviesItemType} from "./MoviesItemType";
import classes from './MoviesItem.module.scss';
import {NavLink} from "react-router-dom";

const MoviesItem: FC<IMoviesItemType> = ({ movie }) => {
    return (
        <Grid item xs={3}>
            <Card className={classes.MoviesItem}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={movie.backdrop_path}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {movie.title.slice(0, 25)}...
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className={classes.Text_Օverview}>
                        {movie.overview.slice(0, 180) }...
                    </Typography>
                </CardContent>
                <CardContent>
                    <Box component='div' className={classes.Inline_Box}>
                        <Typography variant="body2" color="text.secondary"><b>Release Date:</b> { movie.release_date }</Typography>
                        <Typography variant="body2" color="text.secondary"><b>Popularity:</b> { movie.popularity.toFixed(0) }</Typography>
                    </Box>
                    <Box component='div' className={classes.Inline_Box}>
                        <Typography variant="body2" color="text.secondary"><b>Language:</b> { movie.original_language }</Typography>
                        <Typography variant="body2" color="text.secondary"><b>Vote Count:</b> { movie.vote_count }</Typography>
                    </Box>
                </CardContent>
                <CardActions>
                    <Button size="small" variant='outlined'>
                        <NavLink to={'/movie/' + movie._id} className={classes.Link}>View</NavLink>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default MoviesItem;