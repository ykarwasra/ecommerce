import React from 'react'
import "./Navbar.css"
import logo from "../asset/logo.png"
import cartlogo from"../asset/cart-icon.png"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="navbar-logo"/>
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li>Shop</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className='nav-login-cart'>
        <button>Login</button>
        <img src={cartlogo} alt="cart-logo"/>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar
