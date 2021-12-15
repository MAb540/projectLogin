import mongoose from 'mongoose';

const LineSchema = new mongoose.Schema({

    item:{
        type: mongoose.Types.ObjectId,
        ref:'Item',
        required: true
    },

    quantity:{
        type: Number,
        required: true
    }
})

const Line = mongoose.model("Line",LineSchema);

export default Line;