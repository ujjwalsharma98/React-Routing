import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {

  return (
    <nav className="nav">
      <ul className="nav-list">
       
        <li className="navLi"> Logo </li>
       
        <Link to = "/about">
          <li className="navLi"> About </li>
        </Link>
        
        <Link to = "/shop"> 
          <li className="navLi"> Shop </li>
        </Link>

      </ul>
    </nav>
  );
}

export default Nav;
