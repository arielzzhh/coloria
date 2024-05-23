import mongoose from "mongoose";
import Data from "./Data.js";
import connectToMongo from "../dbConnect.js";


async function createDataPoint (data){
    connectToMongo()


try{

    let info = new Data(data)
    return await info.save()
}




catch(error){
console.log('no')

}




}


export default createDataPoint