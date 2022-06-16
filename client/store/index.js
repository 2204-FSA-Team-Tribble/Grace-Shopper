import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import users from './users';
import cart from './cart';
import user from './singleUser';
import productsReducer from './products';
import deleteProductReducer from './deleteProduct';
import createProductReducer from './createProduct';
import singleProductReducer from './singleProduct';

const reducer = combineReducers({
  auth: auth,
  users: users,
  cart: cart,
  products: productsReducer,
  deleteProduct: deleteProductReducer,
  createProduct: createProductReducer,
  singleProduct: singleProductReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
