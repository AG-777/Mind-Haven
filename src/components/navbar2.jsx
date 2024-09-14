import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import BackButton from "./back_btn";

function Navbar({ scroll1, scroll2, customStyles = {} }) {
  return (
    <div className="navbar-main" style={customStyles}>
      {/* <BackButton target={"/dashboard"} /> */}
      <div className="logo">
        <a href="../" className="anchor-logo">
          MindHaven.
        </a>{" "}
      </div>
      <div className="nav">
        <button className="navComp navBtn" onClick={scroll2}>
          Home
        </button>
        <Link to="/about" className="navComp">
          About
        </Link>
        <button className="navComp navBtn" onClick={scroll1}>
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
