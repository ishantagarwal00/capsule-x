import React from "react";
import "./banner.css";
import BannerIcon from "../../assets/icons/banner.jpg";

const Banner = () => {
  return (
    <div className="banner-container">
      <h1 className="heading-wrapper">Space X</h1>
      <div className="banner-content-wrapper">
        <section className="content-left-section">
          <div className="tagline-wrapper">
            SpaceX: Empowering the Future of Space Exploration
          </div>
          <article className="sub-tag-wrapper">
            Experience the next frontier of space travel with SpaceX, where
            innovation meets the stars.
          </article>
        </section>
        <section className="content-right-section">
          <div className="banner-icon-wrapper">
            <img
              src={BannerIcon}
              className="banner-icon"
              alt="spacex-banner-icon"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
