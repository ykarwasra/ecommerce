import React from 'react'
import clothes from "../asset/data.js"
import Item from '../items/Item.jsx'
import "./Popular.css"
const Popular = () => {
  return (
    <div className='popular'>
        <h1>Popular Items</h1>
        <hr></hr>
        <div className='popular-item'>
            {clothes.map((item,i)=>{
                return(<Item key={i} id={item.id} name={item.name} newPrice={item.newPrice} oldPrice={item.oldPrice} image={item.image}></Item>
            )})}
        </div>
    </div>
  )
}

export default Popular
