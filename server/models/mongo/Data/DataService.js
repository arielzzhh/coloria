import mongoose from "mongoose";
import Data from "./Data.js";
import connectToMongo from "../dbConnect.js";


  async function createDataPoint (data){
    connectToMongo()


try{

    let info = new Data(data)
    return  info.save()
}

catch(error){
console.log('no')

}
}




async function getAlldataInfo() {
    try {
        await connectToMongo(); // Ensure the connection is established

        const data = await Data.find();
        return data; // Return the retrieved data
    } catch (error) {
        console.error('Failed to retrieve data:', error); // Log a more descriptive error message
        throw error; // Re-throw the error or handle it as needed
    } finally {
        // Optionally close the database connection if necessary
        // mongoose.connection.close();
    }
}




async function getMyInfo (){
    try {
       await connectToMongo(); // Ensure the connection is established

       const data = await Data.find();
       return data; // Return the retrieved data
   }

   catch (error){
       console.log("getMyInfo")
   }

}






export { getAlldataInfo,createDataPoint,getMyInfo}

