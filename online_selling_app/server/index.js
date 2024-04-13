import Express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const App = Express();

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