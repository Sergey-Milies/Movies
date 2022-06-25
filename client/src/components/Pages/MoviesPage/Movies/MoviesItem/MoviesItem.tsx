import {FC} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from "@mui/material";
import {IMoviesItemType} from "./MoviesItemType";
import classes from './MoviesItem.module.scss';

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
                    <Typography variant="body2" color="text.secondary">
                        {movie.overview.slice(0, 200) }...
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default MoviesItem;