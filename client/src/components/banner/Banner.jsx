import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { shopContext } from '../../context/shopContext'
import "./Banner.css"
const Banner = (props) => {
    const {setCategory}=useContext(shopContext);
    const navigate=useNavigate();
    const handleButton=()=>{
        navigate('/');
        setCategory("Shop");
    }
  return (
    <div className='banner-container'>
      <div className='banner'>
        <p>
          FLAT 50% OFF
        </p>
        <button onClick={()=>{handleButton()}}>Explore now</button>
      </div>
      <div className='banner-img'>
        <img src={props.image}></img>
      </div>
    </div>
  )
}

export default Banner
