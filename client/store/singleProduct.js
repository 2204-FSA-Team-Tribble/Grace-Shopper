import axios from 'axios';
export const GOT_PRODUCT = 'GOT_PRODUCT';

// const initialState = {
//   users: [],
//   products: []
// }

//ACTION CREATOR
export const setProduct = (product) => {
  return {
    type: GOT_PRODUCT,
    product
  };
};

export const fetchProduct = (id) => {
  return async (dispatch) => {
    console.log('hello')
    const {data: product} = await axios.get(`/api/products/${id}`);
    // const {data: product} = {
    //   id:1,

    // }
    dispatch(setProduct(product))
  }
}

//Reducer
export default function productReducer (state={}, action) {
  switch(action.type) {
    case GOT_PRODUCT:
      return action.product;
    default:
      return state;
  }
}
