import exp from 'express';
import dotenv from 'dotenv';
import mongoose, { Schema } from 'mongoose';
import cors from 'cors';
dotenv.config();

const app = exp();
app.use(exp.json());
app.use(cors());

const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("db connected");
    } catch(err){
        console.log(err);
    }
}
const todoSchema =new Schema ({
    title:{
        type:String
    },
    description:{
        type:String
    }
})

const TodoModel = mongoose.model('Todo',todoSchema)

app.post('/todo',async(req,res)=>{
    try{
        console.log(req.body);
    const data = {title:req.body.title,description:req.body.description}
    const entry = new TodoModel(data)
    await entry.save()
    res.status(200).json(data)
    }catch(error){
        console.log(error);
    }
})

app.get('/todo',async(req,res)=>{
    try{
        const getdata = await TodoModel.find()
        console.log(getdata);
        res.status(200).json(getdata)
    }catch(error){
        console.log("Not Get");
        req.status(404).json(error)
    }
})


app.put('/todo/:id',async(req,res)=>{
    try{
        const update = await TodoModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        console.log("Updated",update);
        res.status(200).json(update)
    }catch(error){
        console.log("Update Failed");
        res.status(404).json(error)
    }
})

app.delete('/todo/:id',async(req,res)=>{
    try {
        const del = await TodoModel.findByIdAndDelete(req.params.id,req.body)
        console.log("Deleted Successfully",del);
        res.status(200).json(del)
    } catch (error) {
        console.log("Not Deleted");
        res.status(404).json(error)
    }
})



app.listen(process.env.PORT, ()=>{
    connect();
    console.log("server is connected");
})