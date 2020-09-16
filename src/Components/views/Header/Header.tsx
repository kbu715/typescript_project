import React from "react";
import "./Header.css";

function Header() {
  return (
    <section className="header-section">
      <div className="header">
        <div className="header-logo">
          <a href="#">CARGO</a>
        </div>
        <div className="header-menu">
          <ul>
            <li>
              <a href="#">TEMPLATES</a>
            </li>
            <li>
              <a href="#">SITES</a>
            </li>
            <li>
              <a href="#">SELECTIONS</a>
            </li>
          </ul>
        </div>
        <div className="header-social-media">
          <ul>
            <li>
              <a href="https://twitter.com">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            <i className="fas fa-bars"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">TEMPLATES</a>
            <a href="#">SITES</a>
            <a href="#">SELECTIONS</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
