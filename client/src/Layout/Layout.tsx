import { FC } from "react";
import '../Styles/general.scss';
import { Box, Container } from '@mui/material';
import Header from "./Components/Partials/Header/Header";
import Loader from "./Components/UI/Loader/Loader";
import RouteList from "./RouteList/RouterList";

const Layout: FC = () => {
    return (
        <Box component='div'>
            <Header />
            <Container maxWidth="xl">
                <Loader />
                <RouteList />
            </Container>
        </Box>
    );
}

export default Layout;