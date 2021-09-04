import React from "react";
import "./Navbar.scss";
import logo from "../../logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tours logo" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            about
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
