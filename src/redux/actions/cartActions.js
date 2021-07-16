import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/constants'

export const addToCart = data => {
    return {
        type: ADD_TO_CART,
        payload: data /* Object */
    }
}


export const removeFromCart = (items, product) => dispatch => {
    const cartItems = items.slice().filter(x => x.id !== product.id)
    dispatch({
        type: REMOVE_FROM_CART,
        payload: { cartItems }
    })
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
}

