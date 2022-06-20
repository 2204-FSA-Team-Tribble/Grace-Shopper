import axios from 'axios'

// Action Type
const SET_CART = 'SET_CART'
const CLEAR_CART = 'CLEAR_CART'
const ADD_PRODUCT = 'ADD_PRODUCT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
const MODIFY_PRODUCT = 'MODIFY_PRODUCT'

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

export const _removeProduct = (product, totalPrice) => {
  return {
    type: REMOVE_PRODUCT,
    product,
    totalPrice
  }
}

export const _modifyProduct = (product) => {
  return {
    type: MODIFY_PRODUCT,
    product
  }
}

// Thunk Creator
export const setCart = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/users/${id}`)
      const orders = data.orders
      const activeOrder = orders.filter(order => order.status === 'cart')[0]
      const cart = activeOrder.orderItems
      let total
      if (cart.length > 0) {
        total = cart.reduce(
          (sum, item) => sum + Number(item.totalPrice),
          0
        )
        total = Math.round(100 * total) / 100
      } else {
        total = 0
      }
      dispatch(_setCart(cart, total))
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

export const removeProduct = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.delete(`/api/orderitems/${id}`)
      console.log(data)
      dispatch(_removeProduct(data, data.totalPrice))
    } catch (error) {
      console.log(error)
    }
  }
}

export const modifyProduct = (productId, quantity) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.put(/* API ROUTE */)
      dispatch(_modifyProduct(data))
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
      let newTotal = state.total - action.totalPrice
      newTotal = Math.round(100 * newTotal) / 100
      return {...state, products: [...state.products.filter((product) => product.id !== action.product.id)], total: newTotal}
    default:
      return state
  }
}
