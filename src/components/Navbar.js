import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar(list) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/order-online">Order Online</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
