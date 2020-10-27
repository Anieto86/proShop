
import {CART_ADD_ITEM } from '../constants/cartConstants.js';


//todo ACA va el etado inicial
export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
      case CART_ADD_ITEM:
        const item = action.payload
        const existItem = state.cartItems.find((x)=>)
        return 
     
      default:
        return state;
    }
  };
  