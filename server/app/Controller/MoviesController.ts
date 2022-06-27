import { NextFunction, Request, Response } from "express";
import MoviesService from "../Services/MoviesService/MoviesService";
import Controller from "./Controller";

class MainController extends Controller {

    async getAllMovies (req: Request, res: Response, next: NextFunction) {
        try {
            const filters = req.query;

            const movies = await MoviesService.getAllMovies(filters);

            res.json(movies);
        } catch(e) {
            next(e);
        }
    }

    async getMovie (req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.query;

            const movie = await MoviesService.getMovie(id);

            res.json(movie);
        } catch(e) {
            next(e);
        }
    }
}

export default new MainController();