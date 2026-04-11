import React from "react";
import "./FeaturesSection.css";

const features = [
  {
    icon: "🔗",
    title: "Smart Link Shortening",
    desc: "Shorten any URL instantly with our powerful algorithm.",
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    desc: "Track clicks, locations, and devices in real-time.",
  },
  {
    icon: "🛡️",
    title: "Secure & Reliable",
    desc: "99.9% uptime with enterprise-grade security.",
  },
  {
    icon: "⚡",
    title: "Lightning Fast",
    desc: "Sub-millisecond redirects powered by edge servers.",
  },
  {
    icon: "🎨",
    title: "Custom Aliases",
    desc: "Create branded short links with your own domain.",
  },
  {
    icon: "📱",
    title: "QR Code Generator",
    desc: "Auto-generate QR codes for every shortened link.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="features" id="features">
      <div className="features__top">
        <h2 className="features__heading">
          Everything You Need to Manage Your Links
        </h2>
        <div className="features__right">
          <span className="features__badge">Features</span>
          <p className="features__desc">
            Discover all the powerful tools packed into our URL shortener
            platform. From analytics to custom domains — we've got everything
            you need.
          </p>
        </div>
      </div>
      <div className="features__grid">
        {features.map((f, i) => (
          <div key={i} className="features__card">
            <div className="features__card-icon">{f.icon}</div>
            <div className="features__card-title">{f.title}</div>
            <div className="features__card-desc">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
