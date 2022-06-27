import {ChangeEvent, FC, useEffect, useState} from "react";
import UISelect from "../../../UI/UISelect/UISelect";
import {useAppDispatch} from "../../../../../Store/hooks";
import {getAllMovies} from "../../../../../Store/moviesSlice/moviesThunks";
import {IFilters} from "./FiltersTypes";
import classes from './Filters.module.scss';
import { Card, CardContent, Box, Grid, Typography, TextField } from "@mui/material";
import {dateFilter, languageFilter, popularityFilter, voteCountFilter} from "../../../../../Helpers/FiltersData";

const Filters:FC<IFilters> = ({
        date,
        popularity,
        language,
        vote_count,
        onChangeDate,
        onChangePopularity,
        onChangeLanguage,
        onChangeVoteCount
    }) => {
    const [title, setTitle] = useState<string>('');
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllMovies( { title }));
    }, [title]);

    const changeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let target_value = e.target.value;
        const value = target_value.replace(/  +/g, ' ');
        if(value != ' ') setTitle(value);
    }

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
                                onChange={changeTitleHandler}
                                className={classes.Search_Input}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <UISelect
                            label='Date'
                            value={date}
                            onChangeSelect={onChangeDate}
                            options={dateFilter}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <UISelect
                            label='Popularity'
                            value={popularity}
                            onChangeSelect={onChangePopularity}
                            options={popularityFilter}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <UISelect
                            label='Language'
                            value={language}
                            onChangeSelect={onChangeLanguage}
                            options={languageFilter}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <UISelect
                            label='Vote Count'
                            value={vote_count}
                            onChangeSelect={onChangeVoteCount}
                            options={voteCountFilter}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Filters;