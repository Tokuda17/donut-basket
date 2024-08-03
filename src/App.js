// src/App.js

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import OrderOnlinePage from "./pages/OrderOnlinePage";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <Navbar />
      <div>
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={1000} classNames="fade">
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/order-online" element={<OrderOnlinePage />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default App;
