import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { selectAuthToken } from '../redux/features/authSlice';

const NavbarComponet = () => {
  const [isNavItemsVisible, setIsNavItemsVisible] = useState(false);

  const toggleNavItems = () => {
    setIsNavItemsVisible(!isNavItemsVisible);
  };

  return (
    <nav className='nav'>
      <div className='nav-icon'>
        <NavLink className='nav-link-home'>Blog</NavLink>
      </div>
      <button className='navbar-toggler' onClick={toggleNavItems}>
        <span className='hamburger'></span>
        <span className='hamburger'></span>
        <span className='hamburger'></span>
      </button>
      <div className={`navbar-collapse ${isNavItemsVisible ? 'show' : ''}`}>
        <ul className='nav-items'>
          <li>
            <NavLink to='/' className='nav-link active'>
              Home
            </NavLink>
          </li>
          {selectAuthToken ? (
            <>
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
            </>
          ) : (
            <li>
              <button type='button'>Logout</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponet;
