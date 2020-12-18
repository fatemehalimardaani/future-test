import {GET_PRODUCTS, PRODUCTS_ERROR} from '../types'
import axios from 'axios'

export const getProducts = () => async dispatch => {
    
    try{
        const res = await axios.get(`https://fakestoreapi.com/products`)
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: PRODUCTS_ERROR,
            payload: error,
        })
    }

}