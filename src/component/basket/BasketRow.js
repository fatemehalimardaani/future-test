import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {UPDATE_BASKET} from "../../store/types";

function BasketRow({order}) {
    const basketList = useSelector(state => state.basketList.basket);
    const dispatcher = useDispatch();

    const onChangeCount = e => {
        const {value} = e.target;
        const newBasket = basketList.map(row => {
            if(row.id === order.id){
                return {
                    ...row,
                    count: parseInt(value)
                }
            }else{
                return row
            }
        });
        dispatcher({
            type: UPDATE_BASKET,
            payload: newBasket
        })
    };

    return (
        <>
            <div className='basketRow'>
                <span className='title'> {order.title.length > 12 ? order.title.slice(0, 12) + ' ...' : order.title} </span>
                <input type="number" value={order.count} onChange={onChangeCount}/>
                <span className='price'> $  {order.price} </span>
                <span className='close'>X</span>
            </div>
        </>
    );
  }
  
  export default BasketRow;
  