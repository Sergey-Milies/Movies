import {FC} from "react";
import loader from '../../../../Static/images/loader.gif';
import classes from './Loader.module.scss';
import {Box} from "@mui/material";
import {isLoading} from "../../../../Store/moviesSlice/moviesSlice";
import {useAppSelector} from "../../../../Store/hooks";

const Loader: FC = () => {
    const isLoad = useAppSelector(isLoading);

    return isLoad ? (
        <Box component='div' className={classes.Loader}>
            <img src={loader} />
        </Box>
    ) : null;
}

export default Loader;