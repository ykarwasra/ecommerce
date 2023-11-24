import React from 'react'
import "./RelatedProducts.css"
import relatedProducts from '../asset/relatedProducts.js'
import Item from '../items/Item'
const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr></hr>
      <div className='relatedproducts__items'>
        {relatedProducts.map((item,i)=>{
            return(
                <Item key={i} id={item.id} name={item.name} newPrice={item.newPrice} oldPrice={item.oldPrice} image={item.image}/>
            )
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
