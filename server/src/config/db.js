import mongoose from "mongoose";
import config from "./config.js";

const connectDb = async ()=>{
  try {
    await mongoose.connect(config.MONGO_URI)
    console.log("database is connected");
    
  } catch (error) {
    console.log("error in data base ->" , error);
  }
}

export default connectDb;