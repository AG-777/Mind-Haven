import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import BackButton from "./back_btn";

function Navbar({ scrollToFAQ, scrollToREV, customStyles = {} }) {
  return (
    <div className="navbar-main" style={customStyles}>
      <BackButton target={"/dashboard"} />
      <div className="logo">
        <a href="../" className="anchor-logo">
          MindHaven.
        </a>{" "}
      </div>
      <div className="nav">
        <Link to="/about" className="navComp">
          Home
        </Link>
        <Link to="/about" className="navComp">
          About
        </Link>
        <button className="navComp navBtn" onClick={scrollToFAQ}>
          Therapists
        </button>

        <Link to="/contact" className="navComp">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
