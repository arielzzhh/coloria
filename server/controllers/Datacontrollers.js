
import createDataPoint from "../models/mongo/Data/DataService.js";
import connectToMongo from "../models/mongo/dbConnect.js";



export async function DataRegisterController (req,res){


    try {

        let newUser = await createDataPoint(req.body);
      } catch (err) {
        console.log(req.body);
        
      }
    };
  


    export default DataRegisterController