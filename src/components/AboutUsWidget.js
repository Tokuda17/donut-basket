import React from "react";
import "./AboutUsWidget.css";

function AboutUsWidget({ img, title, description, isLeft, to, name }) {
  return (
    <div
      className={`about-us-widget-container ${
        isLeft ? "about-us-widget-left" : "about-us-widget-right"
      }`}
    >
      <div className="about-us-widget-img" id={img}></div>
      <div className="about-us-widget-description">
        <h1 className="about-us-widget-title">{title.toUpperCase()}</h1>
        <p className="about-us-widget-paragraph">{description}</p>
      </div>
    </div>
  );
}

export default AboutUsWidget;
