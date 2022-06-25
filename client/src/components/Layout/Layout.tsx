import { FC } from "react";
import '../../styles/general.scss';
import { Box, Container } from '@mui/material';
import Header from "./Partials/Header/Header";
import RouteList from "../RouteList/RouterList";
import Loader from "../UI/Loader/Loader";

const Layout: FC = () => {
    return (
        <Box component='div'>
            <Loader />
            <Header />
            <Container maxWidth="xl">
                <RouteList />
            </Container>
        </Box>
    );
}

export default Layout;