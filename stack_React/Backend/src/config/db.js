import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({path: './local.env'})

const MONGO_URL = process.env.DB_URL;

const connectDB = async () =>{
    try {
        await mongoose.connect(MONGO_URL)
        console.log("DB Connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
export default connectDB;