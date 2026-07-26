import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-bg">
        <div className="stars" />
        <div className="stars stars-2" />
        <div className="stars stars-3" />
      </div>
      <div className="banner-content">
        <div className="banner-badge">SPACEX DATA EXPLORER</div>
        <h1 className="banner-title">
          Capsule
          <span className="banner-title-accent">X</span>
        </h1>
        <p className="banner-subtitle">
          Explore SpaceX's capsule fleet — filter by status, launch date, and type.
          All data sourced from the official SpaceX API.
        </p>
        <div className="banner-stats">
          <div className="banner-stat">
            <span className="banner-stat-number">Active</span>
            <span className="banner-stat-label">Capsules in service</span>
          </div>
          <div className="banner-stat">
            <span className="banner-stat-number">Retired</span>
            <span className="banner-stat-label">Retired capsules</span>
          </div>
          <div className="banner-stat">
            <span className="banner-stat-number">Unknown</span>
            <span className="banner-stat-label">Status unknown</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
