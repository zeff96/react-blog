import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarComponet = () => {
  return(
    <nav>
      <div>
        <NavLink className="nav-link">Blog App</NavLink>
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
