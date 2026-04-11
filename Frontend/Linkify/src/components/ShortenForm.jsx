import React, { useState } from "react";
import "./ShortenForm.css";

export default function ShortenForm() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleShorten = async () => {
    if (!url) return;
    setLoading(true);
    try {
      const res = await fetch("/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ originalUrl: url }),
      });
      const data = await res.json();
      setShortUrl(data.shortUrl || data.shortCode);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="shorten-form">
      <p className="shorten-form__title">Paste your long URL below</p>
      <div className="shorten-form__row">
        <input
          className="shorten-form__input"
          type="text"
          placeholder="Paste your long URL here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className="shorten-form__btn"
          onClick={handleShorten}
          disabled={loading}
        >
          {loading ? "Loading..." : "Shorten!"}
        </button>
      </div>
      {shortUrl && (
        <div className="shorten-form__result">
          ✅ Short URL:{" "}
          <a href={shortUrl} target="_blank" rel="noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}
