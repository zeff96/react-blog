import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NavbarComponet = () => {
  return (
    <nav className='nav'>
      <NavLink className='nav-link-home'>Blog</NavLink>
      <button className='navbar-toggler'>
        <span className='hamburger'></span>
        <span className='hamburger'></span>
        <span className='hamburger'></span>
      </button>
      <div>
        <ul className='nav-items'>
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
