import React from "react";
import "./Food.css";

function Food({ name, price, description }) {
  return (
    <div className="food-container">
      <div className="food-header">
        <div className="food-name">{name}</div>
        <div className="food-price">${price}</div>
      </div>
      <p className="food-description">{description}</p>
    </div>
  );
}

export default Food;
