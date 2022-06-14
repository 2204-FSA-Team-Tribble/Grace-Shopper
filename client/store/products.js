import axios from 'axios';
import {GOT_ALL_PRODUCTS} from './actionTypes.js'
import {initialState} from './intialState.js'

//ACTION CREATOR
export const setProducts = (products) => {
  return {
    type: GOT_ALL_PRODUCTS,
    products
  }
};

//THUNK CREATOR
export const fetchProducts = () => {
  return async (dispatch) => {
    const {data:products} = await axios.get('/api/products')
    dispatch(setProducts(products))
  }
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_ALL_PRODUCTS:
      return {...state, products: action.products};
    default:
      return state;
  }
}
