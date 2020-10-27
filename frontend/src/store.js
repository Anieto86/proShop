//todo aca empieza REDUX

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//todo import Reducers
import { productListReducer, productDetailsReducer } from "./reducers/productReducers.js";
import {cartReducer} from './reducers/cartReducers.js';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});


const cartItemsFromStore = localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')) : []


const initialState = {
  cart : {cartItems: cartItemsFromStore}
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
