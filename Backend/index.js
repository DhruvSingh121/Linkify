import express from "express";
import dotenv from "dotenv";
dotenv.config();
import urlRoute from "./routes/url.js";
import { connectDB } from "./connect.js";
const app = express();

connectDB(process.env.MONGO_URI)
  .then(console.log("MongoDb Connected"))
  .catch((err) => console.log("DB ERROR:", err));

app.use(express.json());
app.use("/url", urlRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server Running - ${process.env.PORT}`);
});
