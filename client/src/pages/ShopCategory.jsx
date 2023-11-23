import React, { useContext } from 'react'
import Banner from '../components/banner/Banner';
import { shopContext } from '../context/shopContext';
import sort_icon from "../components/asset/sort.png"
import Item from '../components/items/Item';
import "./css/shopCategory.css"
const ShopCategory = (props) => {
  const {allProducts}=useContext(shopContext);
  return (
    <div className='shop_category'>
      <Banner image={props.banner}></Banner>
      <div className='shop_category_showing'>
        <p>Showing products for {props.shopCategory}</p>
        <div className='sort_item'>
          <p>Sort item</p>
          <img src={sort_icon}></img>
        </div>
      </div>
      <div className='shop_category_products'>
        {allProducts.map((item, i) => {
          if (item.category === props.shopCategory) {
            return(
              <Item key={i} id={item.id} name={item.name} newPrice={item.newPrice} oldPrice={item.oldPrice} image={item.image}/>
            )
          }
          else{
            return(
              <></>
              )
            }
          })}
      </div>
    </div>
  )
}

export default ShopCategory;