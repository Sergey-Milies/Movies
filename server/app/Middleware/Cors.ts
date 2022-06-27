import cors from 'cors';
import express from 'express';
import {app} from "../App/app";

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));