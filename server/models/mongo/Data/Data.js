import mongoose from "mongoose";
import Bulb from "../bulb/bulb.js";  // Correct import

const DataSchema = new mongoose.Schema({
  
   
   
    bank: {
        type: [Number]
    },
    Date: {
        type: [Number]
    },
    roster: []
    ,








    user_id:{
        type: mongoose.Schema.Types.ObjectId,
    
       },

  
  
});

export let Data = mongoose.model('data', DataSchema);

export default Data;