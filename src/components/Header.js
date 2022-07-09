import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">HOME</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">SEARCH</Link>
            </li>

            <li>
              <Link to="/favourites">Favourites</Link>
            </li>

            <li>
              <Link to="/"></Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
