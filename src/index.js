import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT || 7000;

dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send(`<h1>This is homepage</h1>`);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/*

******     First Approach  ******
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR", error);
    throw error;
  }
})();
*/
