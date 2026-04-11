import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // ← ADD THIS
import urlRoute from "./routes/url.js";
import { connectDB } from "./connect.js";

dotenv.config();
const app = express();

connectDB(process.env.MONGO_URI)
  .then(console.log("MongoDB Connected"))
  .catch((err) => console.log("DB ERROR:", err));

app.use(express.json());
app.use(
  cors({
    origin: "*",
  }),
);
app.use("/url", urlRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server Running - ${process.env.PORT}`);
});
