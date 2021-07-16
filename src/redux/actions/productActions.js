import React from 'react';
import { 
    FILTER_PRODUCTS_BY_TYPE , 
    ORDER_PRODUCTS_BY_PRICE 
} from '../constants/constants'

export const fetchActions = () => (dispatch) => {
    
}

export const filterProductsByType = (products, type) => (dispatch) => {
    dispatch({
        type: FILTER_PRODUCTS_BY_TYPE,
        payload: {
            type: type,
            items : type === "" ? products:
            products.filter(x=> x.productType === type)
        }
    })
}

export const orderProductsByPrice = (filteredProducts, sort) => (dispatch) => {
    const sortedProducts = filteredProducts.slice()
    if(sort === "") {
        sortedProducts.sort((a,b) => (a.id > b.id ? 1 : -1));
    }else {
        sortedProducts.sort((a,b) => (
            sort === "LOWEST" ? 
            a.price > b.price ? 1 : -1
            :
            a.price > b.price ? -1 : 1
        
        ));
    }
    dispatch({
        type: ORDER_PRODUCTS_BY_PRICE ,
        payload: {
            sort: sort,
            items : sortedProducts,
        }
    })
}





