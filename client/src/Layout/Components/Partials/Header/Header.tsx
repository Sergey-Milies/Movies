import {FC} from "react";
import {AppBar, Box, Container, Toolbar, Typography} from "@mui/material";
import classes from './Header.module.scss';
import {NavLink} from "react-router-dom";

const Header:FC = () => {
    return (
        <AppBar position="static" className={classes.Header}>
            <Container maxWidth="xl">
                <Box component='div'>
                    <Toolbar disableGutters>
                        <Typography variant={"h5"} sx={{mr:2}}>
                            <NavLink to='/' className={classes.Link}>Movies</NavLink>
                        </Typography>
                    </Toolbar>
                </Box>
            </Container>
        </AppBar>
    );
}

export default Header;