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

// Thunk
export const setUsers = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(/* API ROUTE */)
      dispatch(_setUsers(data));
    } catch (error) {
      console.log(error)
    }
  }
}

// Initial State

