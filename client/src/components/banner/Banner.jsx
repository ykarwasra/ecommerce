import React from 'react'
import "./Banner.css"
const Banner = (props) => {
  return (
    <div className='banner-container'>
      <div className='banner'>
        <p>
          FLAT 50% OFF
        </p>
        <button >Explore now</button>
      </div>
      <div className='banner-img'>
        <img src={props.image}></img>
      </div>
    </div>
  )
}

export default Banner
