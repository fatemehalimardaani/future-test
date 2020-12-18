import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Button from './../../component/button'
import './product.styl'
import {UPDATE_BASKET} from "../../store/types";
function Product(props) {
    const dispatcher = useDispatch();
    const basketList = useSelector(state => state.basketList.basket);

    const {item, number} = props;
    const addToBasket = item => {

        const ID = basketList.findIndex(row => row.id === item.id)
        if(ID === -1){
            dispatcher({
                type: UPDATE_BASKET,
                payload: [...basketList, {
                    ...item,
                    count: 1
                }]
            })
        }else{
            dispatcher({
                type: UPDATE_BASKET,
                payload: basketList.map(row => {
                    if(row.id === item.id){
                        return {
                            ...row,
                            count: ++row.count
                        }
                    }else{
                        return row
                    }
                })
            })
        }

    };
    return (
        <div className='product'>
            <div>
                <span>{number} - </span>
                <span> {item.title.length > 12 ? item.title.slice(0, 12) + ' ...' : item.title} </span>
            </div>
            <Button borderColor='#3fabf0' title='Add to Basket' color='#3fabf0' backgroundColor='white' handleClick={()=> addToBasket(item)} />
        </div>
    );
  }
export default Product;
  