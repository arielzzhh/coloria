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

  
  
});

export let Data = mongoose.model('Data', DataSchema);

export default Data;