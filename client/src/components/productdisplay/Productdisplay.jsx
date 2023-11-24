import React from 'react'
import "./Productdisplay.css"
const Productdisplay = (props) => {
    const {product}=props;
  return (
    <div className='product-display'>
        <div className='product-display-left'>
            <div className='product-img-list'>
                <img src={product.image} ></img>
                <img src={product.image} ></img>
                <img src={product.image} ></img>
                <img src={product.image} ></img>
            </div>
            <div className='product-img-main'>
                <img src={product.image}></img>
            </div>
        </div>
        <div className='product-display-right'>
            <h1>{product.name}</h1>
            <div className='product-display-right-price'>
                <div className='product-price-new'>${product.newPrice}</div>
                <div className='product-price-old'>${product.oldPrice}</div>
            </div>
            <div className='product-display-right-size'>
                <h4>Select your size</h4>
                <div className='product-display-sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                </div>
            </div>
            <button>Add to cart</button>
        </div>
    </div>
  )
}

export default Productdisplay
