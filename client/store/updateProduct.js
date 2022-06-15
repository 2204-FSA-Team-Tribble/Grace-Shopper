import axios from 'axios';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

const initialState = {
  product: {}
}

//action creator
const _updateProduct = (product) => {
  return {
    type: UPDATE_PRODUCT,
    product
  }
}

//thunk creator
export const updateProduct = (product) => {
  return async (dispatch) => {
    const {data: updated} = await axios.put(`/api/products/${product.id}`);
    dispatch(_updateProduct(updated));
  }
}

export default function updateProductReducer (state = {}, action) {
  switch (action.type) {
    case UPDATE_PRODUCT:
      return state.map((product) =>
        product.id === action.product.id ? action.product : product
      )
    default:
      return state;
  }
}
