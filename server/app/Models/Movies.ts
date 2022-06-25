import mongoose from 'mongoose';
import { IMovies } from '../Types/Models/Movies';
const { Schema } = mongoose;
const { model } = mongoose;

const MoviesSchema = new Schema<IMovies>({
    vote_average: Number,
    
    overview: String,
    
    release_date: { 
        type: String, 
        required: true
    },
    
    title: {
        type: String, 
        required: true 
    },
    
    backdrop_path: { 
        type: String, 
        required: true 
    },

    vote_count: Number,
    
    original_language: {
        type: String,
        required: true 
    },
    
    original_title: { 
        type: String,
        required: true
    },
    
    poster_path: {
        type: String,
        required: true
    },
    
    id: Number,
    
    popularity: Number,
    
    media_type: {
        type: String,
        required: true
    }
});

export default model<IMovies>('Movies', MoviesSchema);