import {FC} from "react";
import {IStatic} from "./StaticType";
import {Box} from "@mui/material";
import classes from './Static.module.scss';

const Static:FC<IStatic> = ({ text }) => {
    return (
        <Box className={classes.Static}>{text ? '404 Not Found' : '500 Internal Server Error'}</Box>
    );
}
export default Static;