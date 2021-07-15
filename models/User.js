import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({

    username:{
        type:String,
        trim:true,
        required:true,
        max:64
    },

    phoneNumber:{
        iv:{
            type:String,
            required:true,
            trim:true
        },
        numberHashed:{
            type:String,
            required:true,
            trim:true
        }
    },  

    password:{
        type:String,
        lowercase:true,
        trim:true,
        required:true
    },
   

},{
    timestamps:true
})

const User = mongoose.model("User",UserSchema);

export default User;


    // phoneNumber:{
    //     type:Number,
    //     trim:true,
    //     required:true,
    //     minlength:5,
    //     maxlength:17
    // },  