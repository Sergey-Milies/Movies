import { FC, useEffect, useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Grid, TextField } from "@mui/material";
import classes from './Filters.module.scss';
import Typography from "@mui/material/Typography";
import {useAppDispatch} from "../../../../app/Redux/hooks";
import {getAllMovies} from "../../../../app/Redux/moviesSlice/moviesThunks";
import UISelect from "../../../UI/UISelect/UISelect";
import {IFilters} from "./FiltersTypes";

const Filters:FC<IFilters> = ({ date, onChangeDate, popularity, onChangePopularity }) => {
    const [title, setTitle] = useState<string>('');
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllMovies( { title }));
    }, [title]);

    return (
        <Card sx={{ my: 3 }}>
            <CardContent className={classes.Filters}>
                <Typography gutterBottom variant="h5" component="div" sx={{my: 2}}>
                    Movies
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Box component='div' className={classes.Search_Box}>
                            <TextField
                                label="Search"
                                id="outlined-size-small"
                                size="small"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                className={classes.Search_Input}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <UISelect
                            label='Date'
                            value={date}
                            onChangeSelect={onChangeDate}
                            options={[
                                {value: '', name: 'Select Date'},
                                {value: '2022', name: 'New'},
                                {value: '2021', name: 'Old'}
                            ]}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <UISelect
                            label='Popularity'
                            value={popularity}
                            onChangeSelect={onChangePopularity}
                            options={[
                                {value: '', name: 'Select Popularity'},
                                {value: '0-300', name: '0-300'},
                                {value: '301-500', name: '301-500'},
                                {value: '501-1000', name: '501-1000'},
                                {value: '1001-3000', name: '1001-3000'}
                            ]}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Filters;