import { nanoid } from "nanoid";
import URL from "../models/url.js";

async function handleGenerateURL(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({
      error: "URL is Required",
    });
  }
  const shortID = nanoid(7);
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visiteHistory: [],
  });

  return res.json({ id: shortID });
}

async function handleGetURL(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: { timestamps: Date.now() },
      },
    },
  );
  res.redirect(entry.redirectURL);
}

async function handleAnalytics(req, res) {
  const shortId = req.params.shortId;
  let result = await URL.findOneAndUpdate({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

export { handleGenerateURL, handleGetURL, handleAnalytics };
