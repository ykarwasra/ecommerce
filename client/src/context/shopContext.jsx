import React, { useState } from "react";
import { createContext } from "react";
import allProducts from "../components/asset/allproducts.js";

export const shopContext=createContext(null);
const getDefaultCart=()=>{
let cart={};
for(let i=0;i<allProducts.length+1;i++){
        cart[i]=0;
}
return cart;
}

const ShopContextProvider=(props)=>{
    const [cart,setCart]=useState(getDefaultCart());

    const addToCart=(itemID)=>{
       setCart((prevCart)=>({...prevCart, [itemID]: prevCart[itemID]+1}));
    }
    const removeFromCart=(itemID)=>{
        if (cart[itemID]>0){
            setCart((prevCart)=>({...prevCart, [itemID]: prevCart[itemID]-1}));
            }
        }

    const contextValue={allProducts,cart,addToCart,removeFromCart};
    return(
        <shopContext.Provider value={contextValue}>
            {props.children}
        </shopContext.Provider>
    )
}

export default ShopContextProvider;