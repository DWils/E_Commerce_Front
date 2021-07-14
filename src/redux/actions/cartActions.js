
import { ADD_TO_CART , REMOVE_FROM_CART , CART_RESET} from '../constants/cartConstants'
import axiosInstance from "../../components/axiosInstance";

export const addToCart = produit => {
    return {
        type: ADD_TO_CART,
        payload: produit
    }
}
export const removeToCart = () => {
    return {
        type: REMOVE_FROM_CART
    }
}
export const cartReset = () => {
    return {
        type: CART_RESET
    }
}

export const apiCall = ligneProduit => {
    return dispatch => {

        dispatch(addProductToCart(ligneProduit))

        axiosInstance.post("/ligne-de-produits",ligneProduit)
    }
}
