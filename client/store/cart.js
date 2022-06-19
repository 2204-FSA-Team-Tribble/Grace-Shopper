import axios from 'axios'

// Action Type
const SET_CART = 'SET_CART'
const CLEAR_CART = 'CLEAR_CART'
const ADD_PRODUCT = 'ADD_PRODUCT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

// Action Creator
export const _setCart = (products, total) => {
  return {
    type: SET_CART,
    products,
    total,
  }
}

export const clearCart = () => {
  return {
    type: CLEAR_CART
  }
}

export const _addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product
  }
}

export const _removeProduct = (product) => {
  return {
    type: REMOVE_PRODUCT,
    product
  }
}

// Thunk Creator
export const setCart = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(/* API ROUTE */)
      let total
      if (data.products.length > 0) {
        total = data.products.reduce(
          (sum, item) => sum + Number(item.price),
          0
        )
        total = Math.round(100 * total) / 100
      } else {
        total = 0
      }
      dispatch(_setCart(data.products, total))
    } catch (error) {
      console.log(error)
    }
  }
}

export const addProduct = (userId, productId) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.put(/* API ROUTE */)
      dispatch(_addProduct(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const removeProduct = (userId, productId) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.put(/* API ROUTE */)
      dispatch(_removeProduct(data))
    } catch (error) {
      console.log(error)
    }
  }
}

// Initial State
const initialState = { products: [], total: 0 }

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return { products: [...action.products], total: action.total }
    case CLEAR_CART:
      return { products: [], total: 0}
    case ADD_PRODUCT:
      return {...state, products: [...state.products, action.product]}
    case REMOVE_PRODUCT:
      return {...state, products: [...state.products.filter((product) => productId !== action.product.id)]}
    default:
      return state
  }
}
