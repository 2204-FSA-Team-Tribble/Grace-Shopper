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
export const updateProduct = (product, history) => {
  return async (dispatch) => {
    const {data: updated} = await axios.put(`/api/products/${product.id}`, product);
    dispatch(_updateProduct(updated));
    history.push('/productsadmin')
  }
}

export default function updateProductReducer (state = [], action) {
  switch (action.type) {
    case UPDATE_PRODUCT:
      return state.map((product) =>
        product.id === action.product.id ? action.product : product
      )
    default:
      return state;
  }
}
