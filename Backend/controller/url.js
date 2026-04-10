import { nanoid } from "nanoid";
import URL from "../models/url.js";

async function handleGenerateURL(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({
      error: "URL is Required",
    });
  }

  const existing = await URL.findOne({ redirectURL: body.url });

  if (existing) {
    return res.json({ id: existing.shortId });
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
    { shortId: shortId },
    {
      $push: {
        visitHistory: { timestamps: Date.now() },
      },
    },
    { new: true },
  );

  if (!entry) {
    return res.status(404).send("URL not found");
  }

  res.redirect(entry.redirectURL);
}

async function handleAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId: shortId });

  if (!result) {
    return res.status(404).json({ error: "Not found" });
  }
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

export { handleGenerateURL, handleGetURL, handleAnalytics };
