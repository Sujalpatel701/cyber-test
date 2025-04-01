import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/user" className={({ isActive }) => (isActive ? 'active' : '')}>
            User
          </NavLink>
        </li>
        <li>
          <NavLink to="/subject" className={({ isActive }) => (isActive ? 'active' : '')}>
            Subject
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;