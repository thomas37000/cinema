import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  return (
    <div className="nav">
      <ul>
        <Link to="/">
          <img
            className="logo"
            src="https://st2.depositphotos.com/4398873/7993/v/950/depositphotos_79934552-stock-illustration-retro-cinema-logo.jpg"
            alt="menu"
          />
        </Link>
        <li>
          <a href="/news" className="nav-link">
            News
          </a>
        </li>
        <li>
          <a href="/movies-streaming" className="nav-link">
            <em>Movies Streaming</em>
          </a>
        </li>
        <li>
          <a href="/series-streaming" className="nav-link">
            <em>Series Streaming</em>
          </a>
        </li>

        <li>
          <a href="/contact" className="nav-link">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
