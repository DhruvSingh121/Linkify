import React, { useState } from "react";
import "./ShortenForm.css";
import { shortenURL } from "../services/api.js";
import { toast } from "react-toastify";

export default function ShortenForm() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleShorten = async () => {
    if (!url) {
      toast.warning("Please enter a URL first!");
      return;
    }
    setError("");
    setShortUrl("");
    setLoading(true);

    const toastId = toast.loading("⏳ Server is preparing your link...");
    // add https:// if user forgot it
    let fullUrl = url;
    if (!fullUrl.startsWith("http://") && !fullUrl.startsWith("https://")) {
      fullUrl = "https://" + fullUrl;
    }

    try {
      const data = await shortenURL(fullUrl);
      console.log("data received:", data); // check this in console

      if (data.id) {
        setShortUrl(`https://linkify-djpr.onrender.com/url/${data.id}`);
        toast.update(toastId, {
          render: "🎉 Your short link is ready!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
      } else {
        toast.update(toastId, {
          render: "Unexpected response from server",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (err) {
      console.error("Error:", err.message);
      toast.update(toastId, {
        render: err.message || "Cannot connect to server.",
        type: "error",
        isLoading: false,
        autoClose: 4000,
      });
    }

    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    toast.success("📋 Link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleShorten();
  };

  return (
    <div className="shorten-form">
      <p className="shorten-form__title">Paste Your LONG URL Below</p>
      <div className="shorten-form__row">
        <input
          className="shorten-form__input"
          type="text"
          placeholder="Paste your long URL here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="shorten-form__btn"
          onClick={handleShorten}
          disabled={loading}
        >
          {loading ? "Loading..." : "Shorten!"}
        </button>
      </div>

      {error && <div className="shorten-form__error">❌ {error}</div>}

      {shortUrl && (
        <div className="shorten-form__result">
          <a href={shortUrl} target="_blank" rel="noreferrer">
            {shortUrl}
          </a>
          <button className="shorten-form__copy" onClick={handleCopy}>
            {copied ? "✅ Copied!" : "📋 Copy"}
          </button>
        </div>
      )}
    </div>
  );
}
