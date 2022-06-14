import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import auth from './auth'
<<<<<<< HEAD
import users from './users'
import cart from './cart'

const reducer = combineReducers({
  auth: auth,
  users: users,
  cart: cart
 })
=======
import productsReducer from './products'

const reducer = combineReducers({
  auth,
  products: productsReducer,
})

>>>>>>> de46124253f18f3374ae043e81de42af7cfe4f38
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'
