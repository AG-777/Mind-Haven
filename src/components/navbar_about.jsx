import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
function Navbar({ scrollToTeam, customStyles = {} }) {
  return (
    <div className="navbar-main" style={customStyles}>
      <div className="logo">
        <a href="../" className="anchor-logo">
          MindHaven.
        </a>{" "}
      </div>
      <div className="nav">
        <button className="navComp navBtn" onClick={scrollToTeam}>
          Our Team
        </button>
        <Link to="/contact_us" target="_blank" className="navComp">
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
