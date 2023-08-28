import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const NavbarComponet = () => {
  return(
    <nav className="nav">
      <div className="container">
        <NavLink className="nav-link-home">Blog App</NavLink>
        <div>
          <ul>
            <li>
              <NavLink to="/" className="nav-link">Home</NavLink>
              <NavLink to="/signup" className="nav-link">sign Up</NavLink>
              <select>
                <option defaultValue="Login">Login</option>
                <option value="Logout">Logout</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavbarComponet
