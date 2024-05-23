import mongoose from "mongoose";

const bulbSchema = new mongoose.Schema({
    name: {
        type: String,  // Corrected type to String
        required: true,
    },
    /* Uncomment and use if needed
    level: {
        type: Number,
        required: true,
    },
    genes: {
        type: [Number],
        required: true,
    },
    rgbGene: {
        type: [Number],
        required: true,
    },
    rgb: {
        type: [Number],
        required: true,
    },
    */
});

export let Bulb = mongoose.model('Bulb', bulbSchema);

export default Bulb;