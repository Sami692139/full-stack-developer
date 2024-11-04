import React from 'react'
import logo from "../images/icons/logo.png";
import search from "../images/icons/search-icon.png";
import icon from "..//images/icons/cart.png";
function Header() {
  return (
    <div>
      <header className="first-header">
        <div className="first-contener">
            <div className="link-wrapper">
                <ul>
                    
                    <li className="logo-link"><a href="#"><img src={logo}alt="apple"/></a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iphone</a></li>
                    <li><a href="#">ipad</a></li>
                    <li><a href="#">watch</a></li>
                    <li><a href="#">tv</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Support</a></li>
                    <li className="search-link"><a href="#"><img src={search}alt="search"/></a></li>
                    <li className="cart-link"><a href="#"><img src={icon} alt=""/></a></li>
                </ul>
            </div>
        </div>

    </header>
    </div>
  );
}

export default Header;