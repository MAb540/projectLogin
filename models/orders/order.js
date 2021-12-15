import mongoose from 'mongoose';

const Order_Schema = new mongoose.Schema({


    items:{
        type: Array,
        required: true,
        items:{
            type:mongoose.Types.ObjectId,
            ref:'Order_Item'
        }
    },

    offers:{
        type:Array, 
        required: true,
        items:{
            type:mongoose.Types.ObjectId,
            ref:'Order_Offer'
        }
    },

})


const Order = mongoose.model("Item",Order_Schema);

export default Order;