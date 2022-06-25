import {ChangeEvent, FC, useEffect, useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import classes from './Filters.module.scss';
import Typography from "@mui/material/Typography";
import {useAppDispatch} from "../../../../app/Redux/hooks";
import {getAllMovies} from "../../../../app/Redux/moviesSlice/moviesThunks";

const Filters:FC = () => {
    const [title, setTitle] = useState<any>('');
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllMovies( { title } ));
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
                        <FormControl sx={{ minWidth: '100%' }} size="small">
                            <InputLabel id="demo-select-small">Date</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value=''
                                label="Date"
                            >
                                <MenuItem value="">
                                    <em>Select Date</em>
                                </MenuItem>
                                <MenuItem value={10}>2022-06-06</MenuItem>
                                <MenuItem value={10}>2022-06-10</MenuItem>
                                <MenuItem value={10}>2022-06-12</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                        <FormControl sx={{ minWidth: '100%' }} size="small">
                            <InputLabel id="demo-select-small">Vote Average</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value=''
                                label="Vote Average"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={30}>200</MenuItem>
                                <MenuItem value={30}>300</MenuItem>
                                <MenuItem value={30}>400</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Filters;