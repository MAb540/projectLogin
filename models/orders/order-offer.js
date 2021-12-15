import mongoose from 'mongoose';

const Order_Offer_Schema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    itemId:{
        type: mongoose.Types.ObjectId,
        required: true
    },
    priceReduction:{
        type:Number,
        required: true
    },
    quantityThreshold:{
        type: Number,
    }



})


const Order_Offer = mongoose.model("Item",Order_Offer_Schema);

export default Order_Offer;