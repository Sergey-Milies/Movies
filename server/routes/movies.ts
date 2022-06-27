import express from 'express';
import MoviesController from '../app/Controller/MoviesController';
const router = express.Router();

router.get('/get-all-movies', MoviesController.getAllMovies);
router.get('/get-movie', MoviesController.getMovie);

export { router as movies }