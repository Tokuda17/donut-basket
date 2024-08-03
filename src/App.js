// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import OrderOnlinePage from "./pages/OrderOnlinePage";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/order-online" element={<OrderOnlinePage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
