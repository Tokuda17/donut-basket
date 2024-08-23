import { React, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Ribbon from "../components/Ribbon";
import MenuCategories from "../components/MenuCategories";
import Food from "../components/Food";
import "./MenuPage.css";

function MenuPage() {
  const [selectedMenu, setSelectedMenu] = useState("Breakfast Sandwich");

  const handleMenuChange = (menu) => {
    setSelectedMenu(menu);
  };

  const menuItems = {
    "Breakfast Sandwich": {
      items: [
        { name: "2 Eggs", price: 4.29 },
        { name: "3 Egg Whites", price: 5.29 },
        { name: "2 Eggs & Potatoes", price: 5.29 },
        { name: "Ham & Eggs", price: 6.59 },
        { name: "Pastrami & Eggs", price: 7.59 },
        { name: "Bologna & Eggs", price: 6.99 },
        { name: "Turkey Patty & Eggs", price: 6.59 },
        { name: "Steak & Eggs", price: 7.49 },
        { name: "Bacon Egg & Cheese", price: 6.59 },
        { name: "Sausage Egg & Cheese", price: 6.59 },
        { name: "Taylor Ham, Bacon Eggs & Cheese", price: 8.29 },
        { name: "Taylor Ham Eggs & Cheese", price: 6.59 },
        { name: "Turkey Bacon, Eggs", price: 6.59 },
      ],
      subtitle:
        "Your Choice of Bread: Roll, Wheat, White \n Wrap, Bagel, Rye + $0.50",
    },
    "Omelette Platters": {
      items: [
        { name: "Spinach Omelette", price: 7.99 },
        { name: "Western Omelette", price: 8.99 },
        { name: "Ham & Cheese Omelette", price: 8.99 },
        { name: "Cheese Omelette", price: 7.99 },
        { name: "Vegetarian Omelette", price: 7.99 },
      ],
      subtitle: "All come with home fries and your choice of toast",
    },
    "Hot Sandwiches": {
      items: [
        { name: "Cheese Steak", price: 8.99 },
        { name: "Chicken Cheese Steak", price: 8.99 },
        { name: "Chicken Parmigiana", price: 9.99 },
        { name: "Chicken Cordon Bleu", price: 9.99 },
        { name: "Eggplant Parmigiana", price: 8.99 },
        { name: "Meatball Parmigiana", price: 8.99 },
        { name: "Hot Pastrami", price: 9.99 },
        { name: "Chicken Cutlet Sub", price: 8.99 },
        { name: "BLT on White Toast", price: 7.49 },
        { name: "Tuna Melt on Rye", price: 9.99 },
        { name: "Grilled Cheese", price: 4.99 },
        { name: "Grilled Ham & Cheese", price: 8.99 },
      ],
      subtitle:
        "Available Toppings for Hot Sandwiches: \n Lettuce | Tomato | Onion | Ketchup | Mustard",
    },
    "Cold Sandwiches": {
      items: [
        { name: "Ham", price: 7.99 },
        { name: "Turkey", price: 7.99 },
        { name: "Roast Beef", price: 8.99 },
        { name: "Bologna", price: 7.99 },
        { name: "Salami", price: 7.99 },
        { name: "Peppercorn Turkey", price: 7.99 },
        { name: "Tuna", price: 7.99 },
        { name: "Egg Salad", price: 6.99 },
        { name: "Chicken Salad", price: 7.99 },
        { name: "Egg Salad & Bacon Sub", price: 8.99 },
        { name: "Veggie & Cheese Sub", price: 7.99 },
        {
          name: "The City Sub",
          price: 9.49,
          description: "Turkey, Salami & Swiss",
        },
        {
          name: "The American Sub",
          price: 9.49,
          description: "Bologna, Ham & Cheese",
        },
      ],
      subtitle:
        "(Available Toppings: Lettuce, Tomatos, Onions, Oil & Vinegar, Mayo, Mustard \n Sandwiches served on a roll by default, Sub +$1.00.",
    },
    "Specialty Sandwiches": {
      items: [
        {
          name: "#1 - The Roast Turkey",
          price: 9.49,
          description:
            "Thumann's Turkey with fresh mozzarella, roasted peppers & balsamic vinegar on a sub",
        },
        {
          name: '#2 - The "Livingston"',
          price: 9.49,
          description: "Our homemade tuna with roasted peppers on a sub",
        },
        {
          name: "#3 - Grilled Chicken BLT",
          price: 9.99,
          description: "Grilled Chicken with bacon, lettuce, tomato, and mayo",
        },
        {
          name: "#4 - Grilled Chicken Cheese Steak",
          price: 9.49,
          description:
            "Grilled chicken, melted mozzarella cheese with onions & peppers on a toasted sub",
        },
        {
          name: '#5 - The "Red Dog"',
          price: 9.99,
          description:
            "Sliced roast beef, rosated peppers with honey dijon mustard on a sub",
        },
        {
          name: "#6 - BBQ Grilled Chicken",
          price: 9.49,
          description:
            "Grilled chicken smothered in BBQ sauce, melted mozzarella cheese, sauteed onions on a toasted sub",
        },
        {
          name: "#7 - Grilled Eggplant",
          price: 9.49,
          description:
            "Grilled eggplant, fresh mozzarella, roasted peppers & balsamic vinegar on a sub or wrap",
        },
        {
          name: '#8 - The "Knicks"',
          price: 8.99,
          description:
            "Mounds of fresh roasted Thumann's turkey, coleslaw & russian dressing on a sub",
        },
        {
          name: '#9 - The "D Burger"',
          price: 8.49,
          description: "Double cheeseburger with sauteed onions on a roll",
        },
        {
          name: '#10 - The "Lancer"',
          price: 9.99,
          description:
            "Grilled chicken, sun-dried tomatoes, roasted peppers, fresh mozzarella & balsamic vinegar on a sub or wrap",
        },
        {
          name: "#11 - The Great Grilled Chicken",
          price: 9.99,
          description:
            "Grilled chicken with fresh mozzarella, roasted peppers & balsamic vinegar on a sub",
        },
        {
          name: '#12 - The "Giants"',
          price: 9.99,
          description:
            "Hot pastrami on toasted rye bread with our homemade coleslaw & russian dressing",
        },
        {
          name: '#13 - The "Jets"',
          price: 9.49,
          description:
            "Peppercorn turkey with melted swiss cheese & russian dressing on rye bread",
        },
        {
          name: "#14 - Philly Cheesesteak",
          price: 9.49,
          description:
            "Sliced beef with sauteed onions & peppers and melted American cheese sub",
        },
        {
          name: "#15 - Reuben",
          price: 9.99,
          description:
            "Grilled corned beef, melted swiss, sauerkraut, and russian dressing on grilled rye bread",
        },
        {
          name: "#16 - Italian Hot Dog",
          price: 8.49,
          description:
            "Two hot dogs with sauteed onions & peppers, ketchup, mustard, and home fries on a sub",
        },
        {
          name: "#17 - Buffalo Chicken Sub",
          price: 8.99,
          description:
            "Breaded chicken cutlet, hot sauce, lettuce, tomatoes, smothered with blue cheese dressing on a sub",
        },
        {
          name: "#18 - Meatlovers Triple Decker",
          price: 10.99,
          description:
            "Hot pastrami & corned beef, swiss cheese, russian dressing, and homemade coleslaw on toasted rye",
        },
        {
          name: '#19 - The "Yankees"',
          price: 9.49,
          description:
            "Chicken cutlet, melted pepper jack cheese, hot peppers, lettuce, tomato & ranch dressing on a toasted sub",
        },
        {
          name: "#20 - Chicken Delux",
          price: 10.99,
          description:
            "Breaded chicken cutlet, American cheese, bacon, horseradish sauce, lettuce, and tomato on a sub",
        },
        {
          name: "#21 - The Hungry Man's Sub",
          price: 10.99,
          description:
            "Double cheeseburger, bacon, sauteed onions, french fries, lettuce, and tomato on a sub",
        },
        {
          name: "#22 - Roast Beef Special",
          price: 10.49,
          description:
            "Hot raost beef, melted American cheese, sauteed onions, topped with brown gravy on a sub",
        },
        {
          name: "#23 - Sweet and Spicy",
          price: 9.49,
          description:
            "Grilled peppercorn turkey, melted pepperjack cheese, and honey dijon mustard on a toasted rye",
        },
        {
          name: "#24 - Old Fashioned Italian Sub",
          price: 9.49,
          description:
            "Ham, salami, pepperoni, provolone cheese, lettuce, tomato, onion, oil & vinegar, oregano on a sub",
        },
        {
          name: "#25 - The Champions",
          price: 10.99,
          description:
            "Sliced beef, melted American cheese, bacon, lettuce, tomato, mayo, ketchup on a sub",
        },
        {
          name: "#26 - Chipotle Chicken (Hot Sandwich)",
          price: 9.99,
          description:
            "Sliced chipotlle seasoned chicken, chiopotle chili aioli, lettuce, tomato, mayo on a sub",
        },
        {
          name: "#27 - The V.J.P",
          price: 9.49,
          description:
            "Breaded chicken cutlet, fresh mozzarella, hot peppers, lettuce, tomato, Russian dressing on a toasted sub",
        },
        {
          name: "#28 - Parsley Chicken",
          price: 9.49,
          description:
            "Breaded parsely chicken, mozzarella cheese, lettuce, tomato and mayo on a sub",
        },
      ],
      subtitle: "Sub or Wrap",
    },
    Burgers: {
      items: [
        { name: "Hamburger", price: 6.49 },
        { name: "Cheeseburger", price: 6.99 },
        { name: "Bacon Cheeseburger", price: 8.49 },
      ],
      subtitle:
        "Available Toppings for Burgers: \n Lettuce | Tomato | Onion | Ketchup | Mustard",
    },
    "Sloppy Joes": {
      items: [
        { name: "Turkey Sloppy Joe", price: 10.49 },
        { name: "Ham & Swiss Sloppy Joe", price: 10.49 },
        { name: "Roast Beef Sloppy Joe", price: 10.99 },
      ],
      subtitle:
        "Choice of meat stuffed between 3 slices of fresh rye with russian dressing & coleslaw",
    },
    "Triple Decker Sandwiches": {
      items: [
        { name: "Turkey Club", price: 10.49 },
        { name: "Chicken Salad Club", price: 10.49 },
        { name: "Roast Beef Club", price: 11.49 },
        { name: "Grilled Chicken Club", price: 10.49 },
      ],
      subtitle:
        "Extras: \n Cheese $0.50 | Avocado $1.00 | Roasted Pepper $0.75",
    },
    Wraps: {
      items: [
        {
          name: "Chicken Caesar Wrap",
          price: 9.99,
          description:
            "Grilled chicken, romaine lettuce, parmesan cheese smothered with caesar dressing",
        },
        {
          name: "Eggplant Wrap",
          price: 8.99,
          description:
            "Breaded eggplant, fresh mozzarella, roasted peppers with balsamic vinegar in a wrap",
        },
        {
          name: "Turkey Swiss Wrap",
          price: 8.49,
          description:
            "Turkey, swiss, lettuce, tomato with honey dijon mustard in a wrap",
        },

        {
          name: "Chicken Cutlet Wrap",
          price: 8.99,
          description:
            "Breaded chicken cutlet, lettuce, tomato, mayo in a wrap",
        },
        {
          name: "Turkey Cranberry Wrap",
          price: 9.99,
          description: "Turkey, cranberry sauce, lettuce, mayo in a wrap",
        },
        {
          name: "Chicken Salad w. Bacon Wrap",
          price: 9.99,
          description: "Chicken salad, bacon, lattuce, tomato in a wrap",
        },

        { name: "BLT Wrap with Avocado", price: 8.99, description: "" },
        { name: "Chicken BLT Wrap", price: 9.99, description: "" },
        { name: "Tuna Wrap, Roasted Peppers", price: 9.49, description: "" },
        {
          name: "Build Your Own",
          price: "1 + Toppings",
          description:
            "Taylor Ham (2pcs) $2.00 | Bacon (3pcs) $2.00 | Tomatos $0.50 | Lettuce $0.50 | Egg $0.25 | Cheese $0.50 | Avocado $1.00",
        },
      ],
      subtitle: "",
    },

    Salads: {
      items: [
        { name: "Fresh Garden Salad", price: 6.99 },
        { name: "Avocado Salad", price: 8.99 },
        { name: "Grilled Chicken Caesar Salad", price: 9.99 },
        { name: "Breaded Chicken Cutlet Salad", price: 9.99 },
        {
          name: "Chef Salad",
          price: 10.99,
          description:
            "A garden salad with strips of roast beef, turkey, ham, swiss & American cheese",
        },
        {
          name: "Chicken Chopped Salad",
          price: 10.99,
          description:
            "Chopped Salad with grilled chicken, roast peppers & fresh mozzarella cheese",
        },
        {
          name: "Tuna Salad Platter",
          price: 9.99,
          description: "A mound of tuna over a fresh garden salad",
        },
        {
          name: "Chicken Salad Platter",
          price: 9.99,
          description: "a mound of chicken salad over a fresh garden salad",
        },
        {
          name: "Egg Salad Platter",
          price: 8.99,
          description: "A mound of egg salad over a fresh garden salad",
        },
      ],
      subtitle:
        "Available Dressings: Balsamic, Oil & Vinegar, Italian, Ranch, Russian, and Blue Cheese",
    },
    "Side Order": {
      items: [
        { name: "Chicken Dumplings (8pcs)", price: 6.99 },
        { name: "Home Fries", price: "3.50" },
        { name: "French Fries", price: "3.50" },
        { name: "Mozzarella Sticks (10pcs)", price: "6.99" },
        { name: "Chicken Nuggets (10pcs)", price: 6.99 },
        { name: "Taylor Ham (2pcs)", price: "2.00" },
        { name: "Bacon (3pcs)", price: "2.00" },
      ],
      subtitle: "",
    },
    "Deli by the Pound": {
      items: [
        { name: "Macaroni Salad", price: "6.00" },
        { name: "Egg Salad", price: "9.00" },
        { name: "Tuna Salad", price: "12.00" },
        { name: "Chicken Salad", price: "12.00" },
        { name: "American Cheese", price: "9.00" },
        { name: "Swiss Cheese", price: "9.00" },
        { name: "Provolone Cheese", price: "9.00" },
        { name: "Turkey", price: "12.00" },
        { name: "Ham", price: "12.00" },
        { name: "Corn Beef", price: "13.99" },
        { name: "Pastrami", price: "13.99" },
      ],
      subtitle: "",
    },
    "Coffee & Hot Tea": {
      items: [
        { name: "Small (10oz)", price: 2.25 },
        { name: "Medium (16oz)", price: 2.75 },
        { name: "Large (20oz)", price: 3.25 },
        { name: "Ice Coffee (24oz)", price: "3.50" },
      ],
      subtitle: "",
    },
  };

  return (
    <div className="menu-page">
      <div className="menu-page-top">
        <Ribbon text="Menu" />
      </div>
      <div className="menu-page-bottom">
        <div className="menu-categories">
          {Object.keys(menuItems).map((menuItemKey) => (
            <MenuCategories
              key={menuItemKey}
              name={menuItemKey}
              className={`menu-choices ${
                selectedMenu === menuItemKey ? "menu-selected" : ""
              }`}
              onClick={() => handleMenuChange(menuItemKey)}
            />
          ))}
        </div>
        <TransitionGroup>
          <CSSTransition
            key={selectedMenu}
            timeout={500} // Duration of the fade transition
            classNames="menu-fade" // Class name for the fade transition
          >
            <div className="food-choices-container">
              <h1 className="food-choices-title">{selectedMenu}</h1>
              <h2 className="food-choices-subtitle">
                {menuItems[selectedMenu].subtitle
                  .split("\n")
                  .map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
              </h2>
              <div className="menu-page-list">
                {menuItems[selectedMenu].items.map((item, index) => (
                  <Food
                    key={index}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default MenuPage;
