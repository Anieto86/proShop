import axios from "axios";

import { CART_ADD_ITEM } from "../constants/cartConstants.js";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products${id}`);

  dispatch({ type: CART_ADD_ITEM, 
    payload: { 
       product: data._id,
       name: data.name,
       image: data.image,
       price: data.price,
       countInStock: data.countInStock,
       qty,
    },
    })

//todo para guardar en el local store | se usa el JSON.stringify en el local storage por que solo almacena strings
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
};
