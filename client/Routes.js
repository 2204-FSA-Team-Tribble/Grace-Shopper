import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './components/AuthForm';
import { Signup } from './components/SignUp';
import Home from './components/Home';
import { me } from './store';
import Products from './components/Products.js';
import ProductsAdmin from './components/ProductsAdmin.js';
import CreateProduct from './components/CreateProduct.js';
import SingleProduct from './components/SingleProduct.js';
import SingleProductAdmin from './components/SingleProductAdmin.js';
import SingleUser from './components/SingleUser.js';
import AllUsers from './components/AllUsers.js';
import Cart from './components/Cart.js';
import About from './components/About';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/about" component={About} />

            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:id" component={SingleProduct} />
            <Route exact path="/productsadmin" component={ProductsAdmin} />
            <Route
              exact
              path="/productsadmin/:id"
              component={SingleProductAdmin}
            />
            <Route path="/createProduct" component={CreateProduct} />
            <Route exact path="/users" component={AllUsers} />
            <Route exact path="/users/:id" component={SingleUser} />
            <Route path="/cart" component={Cart} />
          </Switch>
        ) : (
          <Switch>

            <Route exact path="/about" component={About} />

            <Route exact path="/" component={Home} />

            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:id" component={SingleProduct} />
            <Route exact path="/productsadmin" component={ProductsAdmin} />
            <Route
              exact
              path="/productsadmin/:id"
              component={SingleProductAdmin}
            />
            <Route path="/createProduct" component={CreateProduct} />
            <Route path="/cart" component={Cart} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
