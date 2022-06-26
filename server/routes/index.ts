import ErrorMiddleware from "../app/Middleware/ErrorMiddleware";
import { app } from "../config/app";
import { movies } from "./movies";
import {auth} from "./auth";

app.use('/auth', auth);
app.use(movies);
app.use(ErrorMiddleware);