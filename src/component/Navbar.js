import React from 'react';
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">Covid-19</Link>
      <ul id="nav-mobile" className="right ">
      <li><Link to="/">Home</Link></li>
       <li><Link to="/chart">Chart</Link></li>
      </ul>
    </div>
    </nav>
  );
};

export default Navbar;

