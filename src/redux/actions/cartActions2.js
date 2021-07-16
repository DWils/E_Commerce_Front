
import { ADD_TO_CART , REMOVE_FROM_CART } from '../constants/constants'
import axiosInstance from "../../components/axiosInstance";

export const addToCart = (items, product) => dispatch =>{
    const cartItems = items.slice();
    let alreadyInCart = false
    cartItems.forEach(item => {
        if(item.id === product.id ) {
            item.count++;
            alreadyInCart = true;
        }
    })
    if(!alreadyInCart){
        cartItems.push({...product, count: 1})
    }
    dispatch({
        type: ADD_TO_CART,
        payload : { cartItems }
    })
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}


export const removeFromCart = (items, product) => dispatch =>{
    const cartItems = items.slice().filter(x => x.id !== product.id)
    dispatch({
        type: REMOVE_FROM_CART,
        payload: { cartItems }
    })
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
}

