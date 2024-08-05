import React from "react";
import "./Widget.css";
import HomeButton from "./HomeButton";

function Widget({ img, title, description, isLeft, to, name }) {
  return (
    <div
      className={`widget-container ${isLeft ? "widget-left" : "widget-right"}`}
    >
      <div className="widget-img" id={img}></div>
      <div className="widget-description">
        <h1 className="widget-title">{title.toUpperCase()}</h1>
        <p className="widget-paragraph">{description}</p>
        <HomeButton
          className="widget-button"
          to={to}
          name={name.toUpperCase()}
        />
      </div>
    </div>
  );
}

export default Widget;
