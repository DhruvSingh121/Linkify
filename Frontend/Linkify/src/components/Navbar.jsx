import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <a href="/" className="navbar__logo">
        Linkify
      </a>
      <ul className="navbar__links">
        {["Pricing", "Features", "Blog", "Community"].map((item) => (
          <li key={item}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
      <div className="navbar__actions">
        <button className="btn--outline">Login</button>
        <button className="btn--filled">Register Now</button>
      </div>
    </nav>
  );
}
