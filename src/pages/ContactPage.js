import React from "react";
import "./Contact.css";

function ContactPage() {
  return (
    <div className="contact-container">
      <div className="contact-widget-container">
        <div className="contact-widget-img" id="img4"></div>
        <div className="contact-widget-description">
          <div className="contact-info-container">
            <h1 className="contact-info-title">Contact Information</h1>
            <div className="contact-items">
              <div className="contact-item">
                <p className="contact-text">
                  Phone Number:{" "}
                  <a className="contact-links" href="tel:+1234567890">
                    +1 (234) 567-890
                  </a>
                </p>
              </div>
              <div className="contact-item">
                <p className="contact-text">
                  Address: 123 Main St, Anytown, USA
                </p>
              </div>
              <div className="contact-item">
                <p className="contact-text">
                  Email:{" "}
                  <a className="contact-links" href="mailto:info@example.com">
                    info@example.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="hours-info-container">
            <h1 className="contact-info-title">Hours</h1>
            <div className="contact-items">
              <p className="contact-text">Monday-Friday: 9:00 AM - 5:00 PM</p>
              <p className="contact-text">
                Saturday-Sunday: 10:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
