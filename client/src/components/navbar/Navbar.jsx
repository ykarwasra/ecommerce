import React, { useContext, useState } from 'react'
import "./Navbar.css"
import logo from "../asset/logo.png"
import cartlogo from"../asset/cart-icon.png"
import { Link } from 'react-router-dom'
import { shopContext } from '../../context/shopContext'
const Navbar = () => {
 const [menu,setMenu]=useState("shop");
 const {getCartItem}=useContext(shopContext);
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="navbar-logo"/>
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>setMenu("Shop")}><Link style={{textDecoration:'none'}}to="/">Shop</Link>{menu==="Shop"?<hr style={{height:'2px', width:'30px',backgroundColor:'#716D6C', borderRadius:'10px'}}/>:<></>}</li>
        <li onClick={()=>setMenu("Men")}><Link style={{textDecoration:'none'}}to="/men">Men</Link>{menu==="Men"?<hr style={{height:'2px', width:'30px',backgroundColor:'#716D6C', borderRadius:'10px'}}/>:<></>}</li>
        <li onClick={()=>setMenu("Women")}><Link style={{textDecoration:'none'}}to="/women">Women</Link>{menu==="Women"?<hr style={{height:'2px', width:'30px',backgroundColor:'#716D6C', borderRadius:'10px'}}/>:<></>}</li>
        <li onClick={()=>setMenu("Kids")}><Link style={{textDecoration:'none'}}to="/kids">Kids</Link>{menu==="Kids"?<hr style={{height:'2px', width:'30px',backgroundColor:'#716D6C', borderRadius:'10px'}}/>:<></>}</li>
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
