import {Route, Routes} from "react-router-dom";
import {FC} from "react";
import Static from "../UI/Static/Static";
import MoviesPage from "../Pages/MoviesPage/MoviesPage";

const RouteList:FC = () => {
    return (
        <Routes>
            <Route path='/' element={<MoviesPage />} />
            {/*<Route path='/movie/:id' element={} />*/}

            {/* 404 */}
            <Route path='*' element={<Static text='404 Not Found' />} />
        </Routes>
    )
}

export default RouteList;