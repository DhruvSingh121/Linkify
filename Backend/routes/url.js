import express from "express";
import {
  handleGenerateURL,
  handleGetURL,
  handleAnalytics,
} from "../controller/url.js";

const router = express.Router();

router.post("/", handleGenerateURL);
router.get("/:shortId", handleGetURL);
router.get("/dashboard", handleAnalytics);
export default router;
