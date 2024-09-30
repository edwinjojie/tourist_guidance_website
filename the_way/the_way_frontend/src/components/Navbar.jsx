import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <button className="logo-btn"><img src='../assets/theway.jpg'></img></button>
          <div className="dropdown-content">
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
      <div className="navbar-right">
        <button className="translate-btn">
          <span role="img" aria-label="translate">🌐</span> {/* Translate Icon */}
        </button>
        <button className="ar-btn">
          <span role="img" aria-label="camera">📷</span> {/* Camera Icon for AR */}
        </button>
        <button className="profile-btn">
          <span role="img" aria-label="user">👤</span> {/* User Profile Icon */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
