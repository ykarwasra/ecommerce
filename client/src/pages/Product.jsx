import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/breadcrum/Breadcrum';
import Productdisplay from '../components/productdisplay/Productdisplay';
import RelatedProducts from '../components/relatedProducts/RelatedProducts.jsx';
import { shopContext } from '../context/shopContext';

const Product = () => {
  const {allProducts}=useContext(shopContext);
  const {productId}=useParams();
  const product = allProducts.find((e) => e.id === parseInt(productId));
  return (
    <div>
      <div className='Product-container'>
        <Breadcrum product={product}></Breadcrum>
        <Productdisplay product={product}></Productdisplay>
        <RelatedProducts/>
      </div>
    </div>
  )
}

export default Product;