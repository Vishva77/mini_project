import mongoose from "mongoose"
const todoSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
    }
});


const ts = mongoose.model("user",todoSchema)
export default ts
