import React from 'react'
import "./Item.css"
const Item = (props) => {
  return (
    <div className='item'>
      <img src={props.image}></img>
      <p>{props.name}</p>
      <div className='item-prices'>
        <div className='new-price'>
            ${props.newPrice}
        </div>
        <div className='old-price'>
            ${props.oldPrice}
        </div>
      </div>
    </div>
  )
}

export default Item
