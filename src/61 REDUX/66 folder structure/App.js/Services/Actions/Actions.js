// defining Action 
import {add_to_cart} from '../constants'
export const add_to_cart = (data) => {
    return{
            type:'add_to_cart',
            data:data
}
}
