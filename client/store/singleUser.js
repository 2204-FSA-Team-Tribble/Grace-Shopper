import axios from 'axios'

// Action Type
const SET_USER = 'SET_USER'

// Action Creator
const _setUser = (user) => {
  return {
    type: SET_USER,
    user
  }
}

// Thunk Creator
export const setUser = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(/* API ROUTE */)
      dispatch(_setUser(data))
    } catch (error) {
      console.log(error)
    }
  }
}

// Initial State
const initialState = {}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return action.user
    default:
      return state
  }
}
