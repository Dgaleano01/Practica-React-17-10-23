import express from 'express';
import connectDB from './config/db.js';
import morgan from "morgan";
import noteRoutes from "./routes/note.route.js"
import userRoutes from "./routes/user.route.js"
import cors from 'cors'

const APP = express();
const PORT = 3000;

APP.use(express.json())
APP.use(morgan('dev'));
APP.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))


APP.use('/api_notes_app/notes', noteRoutes);
APP.use('/api_notes_app/users', userRoutes)

APP.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
    connectDB();
})