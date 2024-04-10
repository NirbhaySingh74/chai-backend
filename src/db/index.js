import mongoose from "mongoose";

// console.log(process.env.MONGO_URL);
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `\n Mongo DB connected !! DB HOST : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB CONNECTION ERROR", error);
  }
};

export default connectDB;
