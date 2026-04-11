import React from "react";
import "./StatsBar.css";

const stats = [
  { value: "1,254,675+", label: "Total Links" },
  { value: "1,254,675+", label: "Today Links" },
  { value: "1,254,675+", label: "Total Users" },
  { value: "1,254,675+", label: "Total Ads" },
];

export default function StatsBar() {
  return (
    <div className="stats-bar">
      {stats.map((s, i) => (
        <div key={i} className="stats-bar__item">
          <div className="stats-bar__value">{s.value}</div>
          <div className="stats-bar__label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
