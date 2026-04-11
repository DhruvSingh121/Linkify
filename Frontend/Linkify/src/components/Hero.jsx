import React from "react";
import "./Hero.css";
import ShortenForm from "./ShortenForm";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <span className="hero__badge">🚀 Trusted by creators & developers</span>
      <h1 className="hero__heading">
        Shorten Links. Track Performance. Grow Faster.
      </h1>
      <p className="hero__subtext">Funded by Silicon Valley</p>
      <div className="hero__btn-group">
        <button className="hero__btn--primary"> Get Started Free </button>
        <button className="hero__btn--secondary">Learn More</button>
      </div>
      <ShortenForm />
    </section>
  );
}
