import React from "react";
import { createContext } from "react";
import allProducts from "../components/asset/allproducts.js";

export const shopContext=createContext(null);

const ShopContextProvider=(props)=>{
    const contextValue={allProducts};

    return(
        <shopContext.Provider value={contextValue}>
            {props.children}
        </shopContext.Provider>
    )
}

export default ShopContextProvider;