import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <div className="logo">
        <NavLink to="/">RamHack</NavLink>
      </div>
      <div className="menu">
        <NavLink to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/events" activeClassName="active">Events</NavLink>
        <NavLink to="/announcements" activeClassName="active">Announcements</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <NavLink to="/explore" activeClassName="active">Explore</NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
