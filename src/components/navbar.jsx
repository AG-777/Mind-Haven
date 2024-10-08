import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
function Navbar({ scrollToFAQ, scrollToREV , customStyles = {} }) {
  return (
    <div className="navbar-main" style={customStyles}>
      <div className="logo">
        <a href="../" className="anchor-logo">
          MindHaven.
        </a>{" "}
      </div>
      <div className="nav">
        <Link to="/about_us" className="navComp-1">
          About
        </Link>
        <button className="navComp-1 navBtn" onClick={scrollToFAQ}>
          FAQ
        </button>
        <button className="navComp-1 navBtn" onClick={scrollToREV}>
          Reviews
        </button>
        <Link to="/contact_us" target="_blank" className="navComp-1">
          Contact
        </Link>
        {/* <Link to="/login">
          <button className="login-index-btn">Login</button>
        </Link> */}
        <Link to="./login">
          <button className="get-started">
            <span>Get Started</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
