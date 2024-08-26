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
                  <a className="contact-links" href="tel:+9739941300">
                    1 (973) 994-1300
                  </a>
                </p>
              </div>
              <div className="contact-item">
                <p className="contact-text">
                  Address:{" "}
                  <a
                    className="contact-links"
                    target="_blank"
                    href="https://www.google.com/maps/place/327+W+Mt+Pleasant+Ave,+Livingston,+NJ+07039/@40.7958383,-74.3411578,17z/data=!3m1!4b1!4m6!3m5!1s0x89c3a90d9b6268d3:0x962ee10eb25238fd!8m2!3d40.7958383!4d-74.3385882!16s%2Fg%2F11c215pw9p?entry=ttu"
                  >
                    327 W Mt Pleasant Ave
                  </a>
                </p>
              </div>
              <div className="contact-item">
                {/* <p className="contact-text">
                  Email:{" "}
                  <a
                    target="_blank"
                    className="contact-links"
                    href="mailto:info@example.com"
                  >
                    info@example.com
                  </a>
                </p> */}
              </div>
            </div>
          </div>
          <div className="hours-info-container">
            <h1 className="contact-info-title">Hours</h1>
            <div className="contact-items">
              <p className="contact-text">Monday-Saturday: 5:30 AM - 4:30 PM</p>
              <p className="contact-text">Sunday: 7:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
