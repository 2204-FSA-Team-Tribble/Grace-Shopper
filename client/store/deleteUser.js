import axios from 'axios';

export const DELETE_USER = 'DELETE_USER';

//action creator
const _deleteUser = (user) => {
  return {
    type: DELETE_USER,
    user
  }
}

//thunk creator
export const deleteUser = (id, history) => {
  return async (dispatch) => {
    const {data: user} = await axios.delete(`/api/users/${id}`);
    dispatch(_deleteUser(user));
    history.go('/users');
  }
}

export default function deleteUserReducer(state = [], action) {
  switch (action.type) {
    case DELETE_USER:
      return state.filter((user) => user.id !== action.product.id);
    default:
      return state;
  }
}
