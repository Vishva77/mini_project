import express from "express";
import mongoose from "mongoose";
import ts from "./models/models.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB,{
        });
        console.log("Database Is connected");
    } catch (error) {
        console.log(error);
    }
}

app.post('/post',async (req,res)=>{
    const data = {title:req.body.title,description:req.body.description}
    try {
        const entry = new ts(data);
        await entry.save();
        console.log("Posted Succesfully",data);
        res.status(200).json(data);

    } catch (error) {
        console.log("post error",error);
        res.status(404).json(error);
    }
})

app.get('/get',async (req,res)=>{
    try {
        const data = await ts.find();
        console.log("Get Data",data);
        res.status(202).json(data);

    } catch (error) {
        console.log("Get Error",error);
        res.status(404).json(error);
    }
})

app.put('/update/:id',async (req,res)=>{
    try {
        const id = req.params.id
        const update = await ts.findByIdAndUpdate(id,{title:req.body.title,description:req.body.description} /* req.body */,{new:true});
        console.log("Updated Successfully",update);
        res.status(202).json(update)

    } catch (error) {
        console.log("Update Error",error);
        res.status(404).json(error)
    }
})

app.delete('/delete/:id',async (req,res)=>{
    try {
        const id = req.params.id
        const deletedata =await ts.findByIdAndDelete(id)
        console.log("Deleted Succesfully",deletedata);
        res.status(202).json(deletedata);

    } catch (error) {
        console.log("Delete Error",error);
        res.status(404).json(error);
    }
})

app.listen(process.env.PORT,()=>{
    connect();
    console.log("server is running",process.env.PORT);
})