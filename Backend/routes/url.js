import express from "express";
import {
  handleGenerateURL,
  handleGetURL,
  handleAnalytics,
} from "../controller/url.js";

const router = express.Router();

router.post("/", handleGenerateURL);
router.get("/dashboard/:shortId", handleAnalytics);
router.get("/:shortId", handleGetURL);
export default router;
