import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NavbarComponet = () => {
  const [isNavItemsVisible, setIsNavItemsVisible] = useState(false);

  const toggleNavItems = () => {
    setIsNavItemsVisible(!isNavItemsVisible);
  };

  return (
    <nav className='nav'>
      <div>
        <NavLink className='nav-link-home'>Blog</NavLink>
      </div>
      <button className='navbar-toggler' onClick={toggleNavItems}>
        <span className='hamburger'></span>
        <span className='hamburger'></span>
        <span className='hamburger'></span>
      </button>
      <div>
        <ul className={`nav-items ${isNavItemsVisible ? 'show' : ''}`}>
          <li>
            <NavLink to='/' className='nav-link active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/registration' className='nav-link'>
              sign Up
            </NavLink>
          </li>
          <li>
            <NavLink className='nav-link ' to={'/login'}>
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponet;
