import React from 'react';
import Product from './Product'
import './index.styl'
function AllProducts({product}) {
    return (
        <div className='allProducts'>
            <h3>
                Product List
            </h3>
            
            {
                product.map((item,i)=> <Product key={i} number={i+1} item={item} />)
            }
            
        </div>
    );
  }
  
  export default AllProducts;
  