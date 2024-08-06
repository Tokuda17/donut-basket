import React from "react";
import Ribbon from "../components/Ribbon";
import AboutUsWidget from "../components/AboutUsWidget";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="menu-page-top">
        <Ribbon text="About Us" />
      </div>
      <div className="about-page-bottom">
        <div className="about-quote-container">
          <p className="about-us-quote">Family Owned since 2018</p>
        </div>
        <div className="about-us-container">
          <AboutUsWidget
            title="Our Story"
            img="img4"
            description="We are a small local business dedicated towarsd making incredible food for our community. starting our journey is 2018, we love coming into work and providing the town of livingston excellent culinary options"
            isLeft={false}
            to="/menu"
            name="menu"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
