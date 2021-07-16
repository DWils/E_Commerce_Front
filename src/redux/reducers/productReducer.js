import { FILTER_PRODUCTS_BY_TYPE, ORDER_PRODUCTS_BY_PRICE } from '../constants/constants'


const productReducer = (state = {}, action) => {
    switch (action.type) {
        case FILTER_PRODUCTS_BY_TYPE:
            return {
                ...state,
                type: action.payload.type,
                filteredItems: action.payload.items,
            }
        case ORDER_PRODUCTS_BY_PRICE:
            return {
                ...state,
                sort: action.payload.sort,
                filteredItems: action.payload.items,
            }

        default:
            return state
    }
}

export default productReducer