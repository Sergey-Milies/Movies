import { FC } from "react";
import '../../styles/general.scss';
import { Box, Container } from '@mui/material';
import Header from "./Partials/Header/Header";
import RouteList from "../RouteList/RouterList";
import Loader from "../UI/Loader/Loader";
import classes from './Layout.module.scss';

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