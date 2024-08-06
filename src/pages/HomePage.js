import React from "react";
import Ribbon from "../components/Ribbon";
import Widget from "../components/Widget";
import img1 from "../img/logo-black.png";
import img2 from "../img/logo-no-background.png";
import img3 from "../img/bagel-backgound.jpg";
import "./HomePage.css";

function HomePage() {
  const contactInfo = [
    { type: "phone", value: "+19738039377" },
    { type: "email", value: "example@example.com" },
    { type: "location", value: "123 Main St, Anytown, USA" },
  ];
  const formatDescription = (text) => {
    return text.split("\n").map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index < text.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };
  return (
    <div className="home-page">
      <div className="menu-page-top">
        <Ribbon text="Donut Basket" />
      </div>
      <div className="home-widget">
        <Widget
          title="menu"
          img="img1"
          description="Here is our menu. we serve breakfast, lunch and dinner at affordable prices"
          isLeft={true}
          to="/menu"
          name="menu"
        />
        <Widget
          title="about us"
          img="img2"
          description="we are a small run shop that sells incredible food"
          isLeft={false}
          to="/about"
          name="about us"
        />
        <Widget
          title="Contact"
          img="img3"
          description="Call us to order ahead!Call us to order ahead!Call us to order ahead!Call us to order ahead!Call us to order ahead!Call us to order ahead!Call us to order ahead!Call us to order ahead!Call us to order ahead!"
          isLeft={true}
          to="/contact"
          name="Contact"
        />
        <Widget
          title="Hours"
          img="img4"
          description={formatDescription(
            "Monday-Friday: xx:xx - xx:xx\nSatudary-Sunday xx:xx - xx:xx"
          )}
          isLeft={false}
          to="/order-online"
          name="call ahead"
        />
      </div>
    </div>
  );
}

export default HomePage;
