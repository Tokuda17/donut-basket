import { React, useState } from "react";
import Ribbon from "../components/Ribbon";
import "./MenuPage.css";

function MenuPage() {
  const [selectedMenu, setSelectedMenu] = useState("breakfast");

  const handleMenuChange = (menu) => {
    setSelectedMenu(menu);
  };

  const menuItems = {
    breakfast: ["Pancakes", "Waffles", "Omelette"],
    lunch: ["Burger", "Salad", "Sandwich"],
    dinner: ["Steak", "Pasta", "Pizza"],
  };

  return (
    <>
      <div className="menu-page-top">
        <Ribbon text="Menu" />
      </div>
      <div>
        <div>
          <button
            className="menu-chioces"
            onClick={() => handleMenuChange("breakfast")}
          >
            Breakfast
          </button>
          <button
            className="menu-chioces"
            onClick={() => handleMenuChange("lunch")}
          >
            Lunch
          </button>
          <button
            className="menu-chioces"
            onClick={() => handleMenuChange("dinner")}
          >
            Dinner
          </button>
        </div>

        <div>
          {menuItems[selectedMenu].map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MenuPage;
