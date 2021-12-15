import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({

    username:{
        type:String,
        trim:true,
        required:true,
        max:64
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