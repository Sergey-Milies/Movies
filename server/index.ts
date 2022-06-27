import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// --------------------------------

// Middleware
import './app/Middleware/index';

// Routes
import './routes/index';
import {app} from "./app/App/app";

const PORT = process.env.PORT || 5000;


(async () => {
    try {
        const db_connect = process.env.MONGO_URI + '/' + process.env.DB_NAME;
        
        await mongoose.connect(db_connect);

        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT} port !!!`);
        });
    } catch(e) {
        console.log(e);
    } 
})();