import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"
const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}> <img src={props.image} onClick={window.scrollTo(0,0)}></img></Link>
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
