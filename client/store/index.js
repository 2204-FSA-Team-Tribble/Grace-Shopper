import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import auth from './auth'
import users from './users'
import cart from './cart'
import user from './singleUser'
import productsReducer from './products'
import deleteProductReducer from './deleteProduct'
import createProductReducer from './createProduct'
import singleProductReducer from './singleProduct'
import updateProductReducer from './updateProduct'
import deleteUserReducer from './deleteUser'
import updateUserReducer from './updateUser'

const reducer = combineReducers({
  auth: auth,
  users: users,
  cart: cart,
  user: user,
  products: productsReducer,
  deleteProduct: deleteProductReducer,
  createProduct: createProductReducer,
  singleProduct: singleProductReducer,
  updateProduct: updateProductReducer,
  deleteUser: deleteUserReducer,
  updateUser: updateUserReducer,
 })

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
