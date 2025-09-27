import mongoose, { Schema } from "mongoose";


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
     fullName:{
        type:String,
        required:true,
        
    },
     password:{
        type:String,
        required:true,
        minlength:6,
        
    },
    profilePic:{
        type:String,
        default:" "
        
    },

}, 
{timestamps:true}

); //craeted At & updated At


const User = mongoose.model("User",userSchema)


export default User;// Exports the User model so it can be used in other parts of the application.