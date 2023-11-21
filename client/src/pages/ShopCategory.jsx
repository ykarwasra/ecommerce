import React from 'react'
import Banner from '../components/banner/Banner';

const ShopCategory = (props) => {
  return (
    <div className='shop_category'>
      <Banner image={props.banner}></Banner>
    </div>
  )
}

export default ShopCategory;