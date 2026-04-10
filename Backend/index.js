import express from "express";
import dotenv from "dotenv";
dotenv.config();
import urlRoute from "./routes/url.js";
import { connectDB } from "./connect.js";
const app = express();

connectDB("mongodb://localhost:27017/linkify").then(
  console.log("MongoDb Connected"),
);

app.use(express.json());
app.use("/url", urlRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server Running - ${process.env.PORT}`);
});
