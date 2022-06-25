import express from 'express';
import MoviesController from '../app/Controller/MoviesController';
const router = express.Router();

router.get('/get-all-movies', MoviesController.getAllMovies);

export { router as movies }