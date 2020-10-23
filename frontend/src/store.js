//todo aca empieza REDUX

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//todo import Reducers
import { productListReducer } from "./reducers/productReducers.js";

const reducer = combineReducers({
  productList: productListReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
