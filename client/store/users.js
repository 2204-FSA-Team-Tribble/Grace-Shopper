import axios from 'axios'

// Action Type
const SET_USERS = 'SET_USERS'

// Action Creator
const _setUsers = (users) => {
  return {
    type: SET_USERS,
    users
  }
}

// Thunk Creator
export const setUsers = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/users')
      dispatch(_setUsers(data))
    } catch (error) {
      console.log(error)
    }
  }
}

// Initial State
const initialState = []

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return action.users
    default:
      return state
  }
}
