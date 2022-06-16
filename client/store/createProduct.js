import axios from 'axios';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';

//action creator
const _createProduct = product => {
  return {
    type: CREATE_PRODUCT,
    product
  }
}

//thunk creator
export const createProduct = (product, history) => {
  return async (dispatch) => {
    const {data: created} = await axios.post('/api/products', product);
    dispatch(_createProduct(created));
    history.push('/productsadmin')
  }
}

//reducer
export default function createProductReducer (state=[], action) {
  switch (action.type) {
    case CREATE_PRODUCT:
      return [...state, action.product]
    default:
      return state;
  }
}
