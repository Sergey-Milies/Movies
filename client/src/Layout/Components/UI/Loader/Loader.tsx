import {FC, useEffect, useState} from "react";
import loader from '../../../../Static/images/loader.gif';
import classes from './Loader.module.scss';
import {Box} from "@mui/material";
import {isLoading} from "../../../../Store/moviesSlice/moviesSlice";
import {useAppSelector} from "../../../../Store/hooks";

const Loader: FC = () => {
    const [show, setShow] = useState(true);
    const isLoad = useAppSelector(isLoading);

    useEffect(() => {
        if(!isLoad) setTimeout(() => setShow(false), 500);
        else setShow(true);
    }, [isLoad]);

    return show ? (
        <Box component='div' className={classes.Loader}>
            <img src={loader} />
        </Box>
    ) : null;
}

export default Loader;