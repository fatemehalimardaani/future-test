import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './index.styl'
import BasketRow from './BasketRow'
import Button from '../button';
import {UPDATE_BASKET} from "../../store/types";

function Basket({order}) {
    const basketList = useSelector(state => state.basketList.basket);
    const dispatcher = useDispatch();

    let price = 0;
    basketList.forEach(item => {
        price += item.price * item.count;
    })

    const onClear = () => {
        const newBasket = basketList.map(row => ({...row, count: 0}));
        dispatcher({
            type: UPDATE_BASKET,
            payload: newBasket
        })
    }

    return (
        <div className='basketContainer'>
            <h3>
                Basket
            </h3>
            {
                order.map((item,i)=> <BasketRow key={i} order={item} />)
            }
            <div className='basketFooter'>
                <h4 className='total'> TOTAL : ${price.toFixed(2)}</h4>
                <div className='btnGroup'>
                    <Button title="clear" handleClick={onClear} />
                    <Button color='white' borderColor='#3fabf0' backgroundColor='#3fabf0' title="checkout >" />
                </div>
                

            </div> 
            
        </div>
    );
  }
  
  export default Basket;
  