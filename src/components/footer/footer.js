import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>Made with <span className="heart-icon">❤️</span> by Ishant Agarwal</p>
        <p className="footer-sub">Data sourced from <a href="https://github.com/r-spacex/SpaceX-API" target="_blank" rel="noopener noreferrer">SpaceX API</a></p>
      </div>
    </footer>
  );
};

export default Footer;
