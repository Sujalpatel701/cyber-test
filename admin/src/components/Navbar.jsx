import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const location = useLocation(); // Get the current location

  return (
    <div className="navbar">
      <h2>Current Route: {location.pathname}</h2>
      <ul>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            User
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/subject"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Subject
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;