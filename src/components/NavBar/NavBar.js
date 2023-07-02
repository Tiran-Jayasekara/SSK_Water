import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from "../../assests/images/about/gif.gif";

function Navbar() {
  const [click, setClick] = useState(false);
  
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <div className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={logo} alt="Logo" />
          <h6>SSK WATER FILTERS </h6> 
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/store'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Store
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/blog'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;