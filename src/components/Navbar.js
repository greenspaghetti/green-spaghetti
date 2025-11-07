import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/comp-style/navbar.css";

function Navbar({ onOpenLogin }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="navbar">
        <button className="menu-icon" onClick={toggleMenu}>☰</button>

        <div className="navbar-title">
          🍝 <span>Green Spaghetti</span>
        </div>

        <button className="subscribe-btn" onClick={onOpenLogin}>
          Enter the Kitchen
        </button>
      </header>

      {/* Slide-in Menu */}
      <div className={`menu-overlay ${menuOpen ? "active" : ""}`}>
        <div className="menu-header">
          <h2>Menu</h2>
          <button className="close-btn" onClick={closeMenu}>✕</button>
        </div>

        <ul className="menu-links">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/breakfast" onClick={closeMenu}>Breakfast</Link></li>
          <li><Link to="/appetizers" onClick={closeMenu}>Appetizers</Link></li>
          <li><Link to="/soups-salads" onClick={closeMenu}>Soups & Salads</Link></li>
          <li><Link to="/mains" onClick={closeMenu}>Mains</Link></li>
          <li><Link to="/desserts" onClick={closeMenu}>Desserts</Link></li>
          <li><Link to="/drinks-alcohol" onClick={closeMenu}>Drinks & Alcohol</Link></li>
          <li><Link to="/pantry-sauces" onClick={closeMenu}>Pantry & Sauces</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
