import mongoose from "mongoose";
import connectToMongo from "../dbConnect.js";
import bulb from "./bulb.js";




export async function CreateBulb (data){

    connectToMongo()




    try{
        let info = new bulb({name:['ariel','astangelov']})
        return await info.save();

    }



    catch(error){

    }




}



