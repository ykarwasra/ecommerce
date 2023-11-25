import React, { useContext } from 'react'
import "./Hero.css"
import hello from "../asset/hello.jpg"
import shopping_right from "../asset/shopping-right.png"
import { useNavigate } from 'react-router-dom'
import { shopContext } from '../../context/shopContext'
const Hero = () => {
    const {category,setCategory}=useContext(shopContext);
    const navigate = useNavigate();
    const handleButton=()=>{
        navigate("/men");
        setCategory("Men");
    }
  return (
    <div className='hero'>
        <div className='hero-left'>
            <div className='hello-icon'>
                <p>New</p>
                <img src={hello}></img>
            </div>
            <div className='shop-btn'>
                <p>Collection for Everyone</p>
                <button onClick={()=>{handleButton()}}>Shop Now</button>
            </div>
        </div>
        <div className='hero-right'>
            <img src={shopping_right} alt="shopping icon"></img>
        </div>
    </div>
  )
}

export default Hero;