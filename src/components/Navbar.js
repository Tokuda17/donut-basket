import React, { useState } from "react";
import "./Navbar.css";
import blackLogo from "../img/logo-black.png";
import whiteLogo from "../img/logo-white.png";
import logo from "../img/logo-no-background.png";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar(list) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="navbar-container">
      <div className="navbar-empty"></div>
      <header className={menuOpen ? "toggled" : ""}>
        <Link to="/">
          <img className="logo" src={logo} alt="Donut Basket" />
        </Link>

        <nav>
          <ul className={menuOpen ? "active" : ""}>
            <li className="navbar-list">
              <Link className="navbar-link" to="/menu">
                Menu
              </Link>
            </li>
            <li className="navbar-list">
              <Link className="navbar-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="navbar-list">
              <Link className="navbar-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="navbar-list">
              <Link to="/order-online">
                <button className="order-online-button">Order Online</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="navbar-toggler" onClick={toggleMenu}>
        ☰
      </div>
    </div>
  );
}

export default Navbar;
