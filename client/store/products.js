import axios from 'axios';
export const GOT_ALL_PRODUCTS = 'GOT_ALL_PRODUCTS';

const initialState = {
  users: [],
  products: []
}

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
