
import bulb from "../models/mongo/bulb/bulb.js";
import { CreateBulb } from "../models/mongo/bulb/bulbService.js";


export async function bulbRegisterController (req,res){


    try {

        let newUser = await CreateBulb(req.body);
      } catch (err) {
        console.log(req.body);
        
      }
    };
  



    export default bulbRegisterController