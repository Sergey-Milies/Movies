import ErrorMiddleware from "../app/Middleware/ErrorMiddleware";
import { movies } from "./movies";
import {app} from "../app/App/app";

app.use(movies);
app.use(ErrorMiddleware);