import React, { useRef } from "react";
import { Container} from "reactstrap";
import "./header.css";
import { Link } from "react-router-dom";


const navLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "Store",
    url: "/store",
  },
  {
    display: "About",
    url: "/about",
  },
  {
    display: "Blog",
    url: "/blog",
  },
  {
    display: "Contact",
    url: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className="gap-1 d-flex align-items-center">
              <i class="ri-pantone-line"></i> SSK Water
            </h2>
          </div>

          <div className="gap-5 nav d-flex align-items-center">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                   <Link to={item.url}>{item.display}</Link>
                    {/* <a href={item.url}>{item.display}</a> */}
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="gap-2 mb-0 d-flex align-items-center">
                <i class="ri-phone-line"></i> +94 714055143
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
