import React from "react";
import "./OrderOnline.css";
function OrderOnlinePage() {
  return (
    <div className="order-page">
      <h1 className="order-title">Call Ahead</h1>
      <p className="order-text">
        To place a pickup order, please call{<br />}
        {<br />}
        <a id="order-number" href="tel:+1234567890">
          +1 (234) 567-890
        </a>
      </p>
    </div>
  );
}

export default OrderOnlinePage;
