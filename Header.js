// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
    <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/AboutUs" className="nav-link">About Us</Link>
        <Link to="/Products" className="nav-link">Products</Link>
        <Link to="/FarmerLogin" className="nav-link">Farmer Login</Link>
        <Link to="/BuyerLogin" className="nav-link">Buyer Login</Link>
      </nav>
      {/* Add other header content, like a logo or navigation */}
    </header>
  );
}

export default Header;
