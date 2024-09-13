import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
function Navbar({ scrollToFAQ, scrollToREV }) {
  return (
    <div className="navbar-main">
      <div className="logo">MindHaven.</div>
      <div className="nav">
        <Link to="/about" className="navComp">
          About
        </Link>
        <button className="navComp navBtn" onClick={scrollToFAQ}>
          FAQ
        </button>
        <button className="navComp navBtn" onClick={scrollToREV}>
          Reviews
        </button>
        <Link to="/contact" className="navComp">
          Contact
        </Link>
        <Link to="/login">
          <button className="b">Login</button>
        </Link>
        <Link to="/login">
          <button className="a">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
