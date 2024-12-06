import React from "react";
import "../App.css"; // Ensure the App.css file is linked

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand mx-auto d-lg-none" href="/">
          <img
            src={require("../assets/images/logo.png")}
            alt="Logo"
            className="navbar-logo"
          />
        </a>

        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarResponsive">
          {/* Left side: Home and About */}
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link neon-hover" href="/">
                <i className="fa fa-home navbar-icon"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link neon-hover" href="/about">
                <i className="fa fa-info-circle navbar-icon"></i> About
              </a>
            </li>
          </ul>

          {/* Centered Logo for Larger Screens */}
          <a className="navbar-brand d-none d-lg-block mx-auto" href="/">
            <img
              src={require("../assets/images/logo.png")}
              alt="Logo"
              className="navbar-logo"
            />
          </a>

          {/* Right side: Menu and Blog */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link neon-hover" href="/blog">
                <i className="fa fa-pencil-alt navbar-icon"></i> Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link neon-hover" href="/menu">
                <i className="fa fa-utensils navbar-icon"></i> Menu
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
