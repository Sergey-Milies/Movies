import Movies from "../../Models/Movies";
import {IFilters} from "./MoviesServiceTypes";

class MoviesService {
    
    async getAllMovies(filters: IFilters) {
        let filters_obj: any = {};
        if(filters.hasOwnProperty('title')) {
            filters_obj.title = { $regex: '.*' + filters.title + '.*', $options: 'i' }
        }

        const movies = await Movies.find(filters_obj);

        return movies;
    }
}

export default new MoviesService();