import Movies from "../../Models/Movies";
import {IFilters} from "./MoviesServiceTypes";
import {log} from "util";

class MoviesService {
    
    async getAllMovies(filters: IFilters) {
        const filters_obj: any = {};
        if(filters.title) {
            filters_obj.title = { $regex: '.*' + filters.title + '.*', $options: 'i' }
        }

        const movies = await Movies.find(filters_obj);

        return movies;
    }

    async getMovie(id: any) {
        try {
            const movie = await Movies.findById(id);
            return movie;
        } catch (e) {
            return null;
        }
    }
}

export default new MoviesService();