import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h2>Bookstore CMS</h2>
    <ul className="nav-links">
      <Link className="link" to="/">Books</Link>
      <Link className="link" to="/categories">Categories</Link>
    </ul>
  </nav>
);

export default Navbar;
