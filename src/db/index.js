import mongoose from "mongoose";

const PORT = process.env.PORT || 7000;

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
