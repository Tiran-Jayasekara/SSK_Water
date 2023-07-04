import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assests/images/about/gif.gif";

function Navbar() {
  const [click, setClick] = useState(false);
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const isActiveLink = (pathname) => {
    return location.pathname === pathname ? "nav-links active" : "nav-links";
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} alt="Logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className={isActiveLink("/")}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={isActiveLink("/about")}
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/blog"
                className={isActiveLink("/blog")}
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/store"
                className={isActiveLink("/store")}
                onClick={closeMobileMenu}
              >
                Store
              </Link>
            </li>

            <li className="nav-item">
              <div className="contact-box">
                <Link
                  to="/contact"
                  className="nav-links_contact"
                  onClick={closeMobileMenu}
                >
                  Contact Now
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
