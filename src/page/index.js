import React, {useEffect} from 'react';
import Basket from './../component/basket/index'
import AllProducts from './../component/products/index'
import './index.styl'
import {useDispatch, useSelector} from 'react-redux'
import {getProducts} from '../store/actions/productAction'

function Home() {
    const dispatch = useDispatch()
    const productsData = useSelector(state => state.productList);
    const basketList = useSelector(state => state.basketList.basket);
    const {loading, error, products} = productsData
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <div className='container'>
            <div className='allProduct'>
                {loading ? "Loading..." : error ? error.message : <AllProducts product={products.slice(0, 5)}/>}
            </div>
            <div className='basket'>
                <Basket order={basketList}/>
            </div>
        </div>
    );
}

export default Home;
  