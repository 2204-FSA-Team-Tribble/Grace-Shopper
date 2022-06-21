import axios from 'axios';

/*
Need to create thunk to update the order from 'cart' to 'complete', ensure address is updated;
Create a new order;

*/

//Action Type
const SET_ORDER = 'SET_ORDER';
const UPDATE_ORDER = 'UPDATE_ORDER';

const initialState = {
  order: {},
};

//Action Creator
const _updateOrder = (order) => {
  return {
    type: UPDATE_ORDER,
    order,
  };
};

const _setOrder = (order) => {
  return {
    type: SET_ORDER,
    order,
  };
};

//Thunk Creator
export const setOrder=(userId)=>{
  return async(dispatch)=>{
    try {
      const {data}=await axios.get(`/api/users/${userId}`)
      const activeOrder=orders.filter((order)=>order.status==='cart')[0];
      
    } catch (error) {

    }
  }
}
