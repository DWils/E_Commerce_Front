import { SET_PRODUCTS , SELECTED_PRODUCT , REMOVE_SELECTED_PRODUCT } from '../constants/productsConstants'

export const setProducts = produits => {
    return {
        type: SET_PRODUCTS,
        payload: produits
    }
}

export const selectedProduct = produit => {
    return {
        type: SELECTED_PRODUCT,
        payload: produit
    }
}

export const removeSelectedProducts = produit => {
    return {
        type: REMOVE_SELECTED_PRODUCT,
        payload: produit
    }
}

