import axios from 'axios';
export const GOT_PRODUCT = 'GOT_PRODUCT';

const initialState = {
  users: [],
  products: [],
  product: {}
}

//ACTION CREATOR
export const setProduct = (product) => {
  return {
    type: GOT_PRODUCT,
    product
  };
};

export const fetchProduct = (id) => {
  return async (dispatch) => {
    const {data: product} = await axios.get(`/api/products/${id}`);
    dispatch(setProduct(product))
  }
}

//Reducer
export default function productReducer (state=initialState, action) {
  switch(action.type) {
    case GOT_PRODUCT:
      return {...state, product: action.product};
    default:
      return state;
  }
}
