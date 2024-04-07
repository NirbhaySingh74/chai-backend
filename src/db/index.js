import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const PORT = process.env.PORT || 7000;
const MONGO_URL = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${MONGO_URL}/${DB_NAME}`
    );
    console.log(
      `\n Mongo DB connected !! DB HOST : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB CONNECTION ERROR", error);
  }
};

export default connectDB;
