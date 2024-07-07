import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Search for Books</Link>
    <Link to="/login">Login/Signup</Link>
  </nav>
);

export default Navbar;