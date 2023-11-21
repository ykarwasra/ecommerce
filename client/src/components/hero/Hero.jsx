import React from 'react'
import "./Hero.css"
import hello from "../asset/hello.jpg"
import shopping_right from "../asset/shopping-right.png"
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <div className='hello-icon'>
                <p>New</p>
                <img src={hello}></img>
            </div>
            <div className='shop-btn'>
                <p>Collection for Everyone</p>
                <button>Shop Now</button>
            </div>
        </div>
        <div className='hero-right'>
            <img src={shopping_right} alt="shopping icon"></img>
        </div>
    </div>
  )
}

export default Hero;