import {Route, Routes} from "react-router-dom";
import {FC} from "react";
import MoviesPage from "../Components/Pages/MoviesPage/MoviesPage";
import MovieViewPage from "../Components/Pages/MovieViewPage/MovieViewPage";
import Static from "../Components/UI/Static/Static";

const RouteList:FC = () => {
    return (
        <Routes>
            <Route path='/' element={<MoviesPage />} />
            <Route path='/movie/:id' element={<MovieViewPage />} />

            {/* 404 */}
            <Route path='*' element={<Static text='404 Not Found' />} />
        </Routes>
    )
}

export default RouteList;