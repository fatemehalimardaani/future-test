import { combineReducers } from 'redux'
import productReducer from './productReducer'
import basketReducer from "./basketReducer";
export default combineReducers({
    productList: productReducer,
    basketList: basketReducer
})
