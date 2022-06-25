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
}

export default new MainController();