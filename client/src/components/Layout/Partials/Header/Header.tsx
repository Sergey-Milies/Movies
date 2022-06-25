import {FC} from "react";
import {AppBar, Box, Container, Toolbar, Typography} from "@mui/material";

const Header:FC = () => {
    return (
        <AppBar position="static">
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