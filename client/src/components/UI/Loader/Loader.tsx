import {FC} from "react";
import loader from '../../../static/images/loader.gif';
import classes from './Loader.module.scss';
import {Box} from "@mui/material";
import {useAppSelector} from "../../../app/Redux/hooks";
import {isLoading} from "../../../app/Redux/moviesSlice/moviesSlice";

const Loader: FC = () => {
    const is_load = useAppSelector(isLoading);

    return is_load ? (
        <Box component='div' className={classes.Loader}>
            <img src={loader} />
        </Box>
    ) : null;
}

export default Loader;