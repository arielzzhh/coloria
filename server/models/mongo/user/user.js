import mongoose from "mongoose";



const userSchene =new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },






})




export let User = mongoose.model("User",userSchene)