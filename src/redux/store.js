import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import productReducer from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducers2";

const rootReducer = combineReducers({
    cart: cartReducer,
})



const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store