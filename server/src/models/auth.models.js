import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:2
    },

    email:{
        type:String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/  
    },

    passwordHash:{
        type:String,
        required:true,
    },
   
    role:{
        type:String,
        default:"user",
        enum:["user" , "admin" , "superadmin"]
    },

    access:{
        type:Boolean,
        default:true
    },

    refreshToken:{
        type:String,
    }

})


const authModel = mongoose.model("users" , authSchema);
export default authModel;