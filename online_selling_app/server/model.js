import mongoose from 'mongoose'

const vehicleschema= new mongoose.Schema({
    vehicleName:{
        type:String,
    },
    price:{
        type:Number
    },
    year:{
        type:Number
    },
    whatsapp:{
      type:Number
    },
    img:{
        type:String
    }


})

export default mongoose.model("vehicle",vehicleschema)