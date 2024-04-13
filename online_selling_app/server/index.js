import Express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from'./routes.js';
import cors from "cors";
dotenv.config();

const App = Express();
App.use(cors());

App.use(Express.json());

App.use('/info',route)

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Database Connected");
    } catch (error) {
        console.log(error);
    }
}

App.listen(process.env.PORT, ()=>{
    connect();
    console.log("Server Is Running")
})