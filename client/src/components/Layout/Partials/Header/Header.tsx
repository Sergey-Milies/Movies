import {FC} from "react";
import {AppBar, Box, Container, Toolbar, Typography} from "@mui/material";
import classes from './Header.module.scss';

const Header:FC = () => {
    return (
        <AppBar position="static" className={classes.Header}>
            <Container maxWidth="lg">
                <Box component='div'>
                    <Toolbar disableGutters>
                        <Typography variant={"h5"} sx={{mr:2}}>
                            <Box>Movies</Box>
                        </Typography>
                    </Toolbar>
                </Box>
            </Container>
        </AppBar>
    );
}

export default Header;