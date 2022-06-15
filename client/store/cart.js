import axios from 'axios'

// Action Type
const SET_CART = 'SET_CART'

// Action Creator
const _setCart = (items) => {
  return {
    type: SET_CART,
    items
  }
}

// Thunk Creator
export const setCart = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(/* API ROUTE */)
      dispatch(_setCart(data))
    } catch (error) {
      console.log(error)
    }
  }
}

// Initial State
const initialState = []

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return action.items
    default:
      return state
  }
}