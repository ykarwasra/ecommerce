import React from 'react'
import "./Breadcrum.css"
import arrow from "../asset/arrow.png"

const Breadcrum = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum-container'>
        Home <img src={arrow}/> Shop <img src={arrow}/> {product.category} <img src={arrow}/> {product.name}
    </div>
  )
}

export default Breadcrum
