import {UPDATE_BASKET} from '../types'

const initialState = {
    basket:[],
}

export default function(state = initialState, action){

    switch(action.type){
        case UPDATE_BASKET:
            return {
                ...state,
                basket: action.payload,
            }
        default: return state
    }

}
