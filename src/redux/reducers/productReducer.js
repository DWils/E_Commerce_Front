import { SET_PRODUCTS , SELECTED_PRODUCT , REMOVE_SELECTED_PRODUCT } from '../constants/productsConstants'

const initialStateProducts = {
    products:[{
        id:5000,
        name : "Carotte",
        price : 0.20,
        type : "Légume"
    }
    ]
}

const productReducer = (state = initialStateProducts, action) => {
    switch (action.type) {
        case SET_PRODUCTS :
            return state
    
        default:
            return state
    }
}

export default productReducer