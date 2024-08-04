import { React, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Ribbon from "../components/Ribbon";
import MenuCategories from "../components/MenuCategories";
import Food from "../components/Food";
import "./MenuPage.css";

function MenuPage() {
  const [selectedMenu, setSelectedMenu] = useState("breakfast");

  const handleMenuChange = (menu) => {
    setSelectedMenu(menu);
  };

  const menuItems = {
    breakfast: [
      { name: "Pancakes", price: 5.99, description: "Fluffy pancakes" },
      { name: "Waffles", price: 6.99, description: "Crispy waffles" },
      { name: "Omelette", price: 7.99, description: "Cheese omelette" },
    ],
    lunch: [
      { name: "Burger", price: 8.99, description: "Juicy burger" },
      { name: "Salad", price: 6.99, description: "Fresh salad" },
      { name: "Sandwich", price: 7.49, description: "Ham sandwich" },
    ],
    dinner: [
      { name: "Steak", price: 14.99, description: "Grilled steak" },
      { name: "Pasta", price: 12.99, description: "Italian pasta" },
      { name: "Pizza", price: 11.99, description: "Cheesy pizza" },
    ],
  };

  return (
    <div className="menu-page">
      <div className="menu-page-top">
        <Ribbon text="Menu" />
      </div>
      <div className="menu-page-bottom">
        <div className="menu-categories">
          <MenuCategories
            name="Breakfast"
            className={`menu-choices ${
              selectedMenu === "breakfast" ? "menu-selected" : ""
            }`}
            onClick={() => handleMenuChange("breakfast")}
          />
          <MenuCategories
            name="Lunch"
            className={`menu-choices ${
              selectedMenu === "lunch" ? "menu-selected" : ""
            }`}
            onClick={() => handleMenuChange("lunch")}
          />
          <MenuCategories
            name="Dinner"
            className={`menu-choices ${
              selectedMenu === "dinner" ? "menu-selected" : ""
            }`}
            onClick={() => handleMenuChange("dinner")}
          />
        </div>
        <TransitionGroup>
          <CSSTransition
            key={selectedMenu}
            timeout={500} // Duration of the fade transition
            classNames="menu-fade" // Class name for the fade transition
          >
            <div className="food-choices-container">
              <div className="food-choices-title">
                {selectedMenu.toUpperCase()}
              </div>
              {menuItems[selectedMenu].map((item, index) => (
                <Food
                  key={index}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                />
              ))}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default MenuPage;
