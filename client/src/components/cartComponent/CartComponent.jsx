import React from 'react'
import { useContext } from 'react'
import { shopContext } from '../../context/shopContext'
import "./CartComponent.css"
const CartComponent = () => {
    const {allProducts,removeFromCart,cart,getCartTotal}=useContext(shopContext);
  return (
    <div className='cartcomponent'>
        <div className='cartcomponent-main'>
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        <div className='cartcomponent-format'>
            {allProducts.map((e)=>{
                if(cart[e.id]>0){
                    return(
                        <div key={e.id} className='cartcomponent-format-item'>
                            <img src={e.image} alt={e.title}/>
                            <p>{e.name}</p>
                            <p>${e.newPrice}</p>
                            <button>{cart[e.id]}</button>
                            <p>${e.newPrice*cart[e.id]}</p>
                            <button onClick={() => removeFromCart(e.id)}>Remove</button>
                        </div>
                    )
                }
                return null;
            })}
        </div>
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Total</h1>
                <div className="cartitems-total">
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getCartTotal()}</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <p>Total</p>
                        <p>${getCartTotal()}</p>
                    </div>
                </div>
                <button>Proceed to Buy</button>
            </div>
        </div>
    </div>
  )
}

export default CartComponent;
