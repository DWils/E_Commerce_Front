import { ADD_TO_CART , REMOVE_FROM_CART } from '../constants/constants'

const initialState = {
    products: []
}

const helperAddToCart = (state,action) => {
    const cartItems = state.slice();
    const product = action.payload
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
    return state
}

//reducer
export const cartReducer = (state = initialState.products, action ) => {

    if(localStorage.getItem("cartItems")) {
        state = JSON.parse(localStorage.getItem("cartItems"))
    }

    switch (action.type) {
        case ADD_TO_CART:
            state = helperAddToCart(action)
            localStorage.setItem("cartItems", JSON.stringify(state));
            return state
        case REMOVE_FROM_CART:
            return { cartItems: action.payload.cartItems}
        default: return state
    }
}