import axios from 'axios'

// Action Type
const SET_CART = 'SET_CART'
const SET_TOTAL = 'SET_TOTAL'

// Action Creator
export const _setCart = (products, total) => {
  return {
    type: SET_CART,
    products,
    total,
  }
}

export const _setTotal = (total) => {
  return {
    type: SET_TOTAL,
    total,
  }
}

// Thunk Creator
export const setCart = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/users/${id}`)
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

// Initial State
const initialState = { products: [], total: 0 }

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return { ...state, products: [...action.products], total: action.total }
    case SET_TOTAL:
      return { ...state, total: action.total }
    default:
      return state
  }
}
