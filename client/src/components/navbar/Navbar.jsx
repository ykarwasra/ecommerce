import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../asset/logo.png"
import cartlogo from"../asset/cart-icon.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
 const [menu,setMenu]=useState("shop");
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="navbar-logo"/>
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>setMenu("Shop")}><Link to="/">Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("Men")}><Link to="/men">Men</Link>{menu==="Men"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("Women")}><Link to="/women">Women</Link>{menu==="Women"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("Kids")}><Link to="/kids">Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cartlogo} alt="cart-logo"/></Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar;
