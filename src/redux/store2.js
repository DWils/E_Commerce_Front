import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import productReducer from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducers2";

const rootReducer = combineReducers({
    allProducts: productReducer,
    cart: cartReducer,
})



const store2 = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store2