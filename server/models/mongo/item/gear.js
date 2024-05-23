import mongoose from "mongoose";




const gearScheme = new mongoose.Schema({

    name:{
        type: String,
        required: true,
    },
  
    value:{
        type: Number,
        required: true,
    },
    rarity:{
        type: Number,
        required: true,
    },
    description:{
        type: String,
    },
    rgb:{
        type:[Number]
        ,required: true,

    },
    pysical:{
        type :Number,
        required: true,

    } 
})




export let Gear =mongoose.model('Gear',gearScheme);


export default Gear