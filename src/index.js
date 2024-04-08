import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
const PORT = process.env.PORT || 8000;
dotenv.config();

connectDB()
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server is running at port : ${PORT}`);
    })
  )
  .catch((err) => console.log("mongoDb connection failed"));
