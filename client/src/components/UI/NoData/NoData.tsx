import {FC} from "react";
import {Box} from "@mui/material";
import classes from './NoData.module.scss';

const NoData: FC = () => {
    return (
        <Box component='div' className={classes.NoData}>
            No Data
        </Box>
    )
}

export default NoData;