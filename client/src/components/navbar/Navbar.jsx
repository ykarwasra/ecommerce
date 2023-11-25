import React, { useContext, useEffect, useState } from 'react'
import "./Navbar.css"
import logo from "../asset/logo.png"
import cartlogo from"../asset/cart-icon.png"
import { Link, useNavigate } from 'react-router-dom'
import { shopContext } from '../../context/shopContext'
const Navbar = () => {
 const {getCartItem,category,setCategory}=useContext(shopContext);
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="navbar-logo"/>
        <Link style={{textDecoration:'none'}} to="/" ><p>SHOPPER</p></Link>
      </div>
      <ul className='nav-menu'>
        <li ><Link onClick={()=>{setCategory("Shop")}} style={{textDecoration:'none'}}to="/">Shop</Link>{category==="Shop"?<hr style={{height:'2px', width:'30px',backgroundColor:'#716D6C', borderRadius:'10px'}}/>:<></>}</li>
        <li ><Link onClick={()=>{setCategory("Men")}} style={{textDecoration:'none'}}to="/men">Men</Link>{category==="Men"?<hr style={{height:'2px', width:'30px',backgroundColor:'#716D6C', borderRadius:'10px'}}/>:<></>}</li>
        <li ><Link onClick={()=>{setCategory("Women")}} style={{textDecoration:'none'}}to="/women">Women</Link>{category==="Women"?<hr style={{height:'2px', width:'30px',backgroundColor:'#716D6C', borderRadius:'10px'}}/>:<></>}</li>
        <li ><Link onClick={()=>{setCategory("Kids")}} style={{textDecoration:'none'}}to="/kids">Kids</Link>{category==="Kids"?<hr style={{height:'2px', width:'30px',backgroundColor:'#716D6C', borderRadius:'10px'}}/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cartlogo} alt="cart-logo"/></Link>
        <div className='nav-cart-count'>{getCartItem()}</div>
      </div>
    </div>
  )
}

export default Navbar;
