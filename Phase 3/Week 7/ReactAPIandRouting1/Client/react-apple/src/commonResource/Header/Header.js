import React from 'react'
import logo from "../images/icons/logo.png";
import search from "../images/icons/search-icon.png";
import icon from "..//images/icons/cart.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <header className="first-header">
        <div className="first-contener">
          <div className="link-wrapper">
            <ul>
              <li className="logo-link">
                <Link to="/">
                  <img src={logo} alt="apple" />
                </Link>
              </li>
              <li>
                <Link to="/Mac/">Mac</Link>
              </li>
              <li>
                <Link to="iphone">iphone</Link>
              </li>
              <li>
                <Link to="/ipad">ipad</Link>
              </li>
              <li>
                <Link to="/watch">watch</Link>
              </li>
              <li>
                <Link to="/tv">tv</Link>
              </li>
              <li>
                <Link to="/music">Music</Link>
              </li>
              <li>
                <Link to="/Support">Support</Link>
              </li>
              <li className="search-link">
                <Link to="/search/">
                  <img src={search} alt="search" />
                </Link>
              </li>
              <li className="cart-link">
                <Link to="/icon/">
                  <img src={icon} alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;