import {add_to_cart} from '../constants'

const initialState = {
    cardData : []
}
export default function cardItems (state = initialState,action)
{
    switch(action.type){
        case add_to_cart:
            return{
                ...state,
                cardData: action.data
            }
            break;
        default:
            return state
    }
}