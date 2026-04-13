const BASE_URL = "https://linkify-djpr.onrender.com/url";

export const shortenURL = async (url) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url: url }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Server error");
  }

  return res.json();
};
