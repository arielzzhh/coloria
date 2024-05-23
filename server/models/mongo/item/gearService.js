import connectToMongo from "../dbConnect.js"
import Gear from './gear.js'



export const createGear =async (data)=>{
    connectToMongo()

    try {
        let infoObject =data
        let newGear =new Gear(data);
        return await newGear.save();



    }

    catch(error){
        res.send('Request received');


    }

}




export default createGear