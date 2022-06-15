import axios from 'axios';

export const DELETE_PRODUCT = 'DELETE_PRODUCT';

//action creator

const _deleteProduct = (product) => {
  return {
    type: DELETE_PRODUCT,
    product
  }
}

//thunk creator
export const deleteProduct = (id) => {
  return async (dispatch) => {
    const {data: product} = await axios.delete(`/api/products/${id}`);
    dispatch(_deleteProduct(product));
  }
}

export default function deleteProductReducer(state = [], action) {
  switch (action.type) {
    case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.product.id);
    default:
      return state;
  }
}
