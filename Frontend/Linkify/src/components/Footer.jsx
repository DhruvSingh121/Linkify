import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__logo">Linkify - DS</span>©{" "}
      {new Date().getFullYear()} Linkify@DS — All rights reserved.
    </footer>
  );
}
