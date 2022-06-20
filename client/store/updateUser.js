import axios from 'axios';
export const UPDATE_USER = 'UPDATE_USER';

const initialState = {
  user: {}
}

//action creator
const _updateUser = (user) => {
  return {
    type: UPDATE_USER,
    user
  }
}

//thunk creator
export const updateUser = (user, history) => {
  return async (dispatch) => {
    const {data: updated} = await axios.put(`/api/users/update/${user.id}`, user);
    dispatch(_updateUser(updated));
    history.push('/products')
  }
}

export default function updateUserReducer (state = [], action) {
  switch (action.type) {
    case UPDATE_USER:
      return state.map((user) =>
        user.id === action.user.id ? action.user : user
      )
    default:
      return state;
  }
}
