import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <img src="./logo.jpeg" alt="Nalazuri Logo" className="navbar-logo" />
      <nav className="navbar-links">
        <a href="#">Safaris</a>
        <a href="#">Travel Style</a>
        <a href="#">Tour Destinations</a>
        <a href="#">Giving Back</a>
        <a href="#">Contact Us</a>
        <button className="signup-btn">Sign Up</button>
      </nav>
    </header>
  );
};

export default Navbar;
