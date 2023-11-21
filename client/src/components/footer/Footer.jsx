import React from 'react'
import "./Footer.css"
import instagram from "../asset/instagram.jpg"
import whatsapp from "../asset/whatsapp.png"
import pinterest from "../asset/pinterest.png"
import logo from "../asset/logo.png"
const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='footer-logo'>
            <img src={logo}></img>
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='social-icons'>
            <div className='social-icons-image'>
                <img src={instagram}></img>
            </div>
            <div className='social-icons-image'>
                <img src={whatsapp}></img>
            </div>
            <div className='social-icons-image'>
                <img src={pinterest}></img>
            </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <hr/>
        <p>Copyright @2023 - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
