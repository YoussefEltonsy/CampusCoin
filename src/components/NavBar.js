import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/explore">Explore</Link>
    <Link to="/payments">Payments</Link>
    <Link to="/cards">Cards</Link>
  </nav>
);

export default NavBar;
