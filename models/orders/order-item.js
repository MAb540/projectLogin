import mongoose from 'mongoose';

const Order_Item_Schema = new mongoose.Schema({

    name:{
        type: String,

    },
    originalPrice:{
        type:Number,
        required: true
    },
    discountedPrice:{
        type:Number,
        required: true
    }



})


const Order_Item = mongoose.model("Item",Order_Item_Schema);

export default Order_Item;