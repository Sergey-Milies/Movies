import ErrorMiddleware from "../app/Middleware/ErrorMiddleware";
import { app } from "../config/app";
import { movies } from "./movies";

app.use(movies);
app.use(ErrorMiddleware);