import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav-bar-container">
      <ul className="middle-items">
        <li className="list-item">
          <Link to="/" className="link">
            Pokedex
          </Link>
        </li>
        <li className="list-item">
          |
        </li>
        <li className="list-item">
          <Link to="/about" className="link">
            About
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header;