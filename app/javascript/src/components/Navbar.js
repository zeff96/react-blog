import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NavbarComponet = () => {
  return (
    <nav className='nav'>
      <div className='container'>
        <NavLink className='nav-link-home'>Blog App</NavLink>
        <button>
          <div className='hamburger'></div>
          <div className='hamburger'></div>
          <div className='hamburger'></div>
        </button>
        <div>
          <ul className='nav-items'>
            <li>
              <NavLink to='/' className='nav-link'>
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
      </div>
    </nav>
  );
};

export default NavbarComponet;
