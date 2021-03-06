import React from 'react';
import { connect } from 'react-redux';
import { setCart, _setCart } from '../store/cart';
import { Link, NavLink } from 'react-router-dom';

export class CartLink extends React.Component {
  componentDidMount() {
    if (!this.props.auth.id) {
      this.props.clearCart();
    } else {
      this.props.setCart(this.props.auth.id);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.auth.id !== this.props.auth.id) {
      if (!this.props.auth.id) {
        this.props.clearCart();
      } else {
        this.props.setCart(this.props.auth.id);
      }
    }
  }

  render() {
    const cartQuantity = this.props.cart.products.length || 0;

    return (
      <NavLink to="/cart" className="btn btn-outline-secondary ms-2">
        <i className="fa fa-shopping-cart me-1"></i>
        {`Cart (${cartQuantity})`}
      </NavLink>
    );
  }
}

const mapState = (state) => ({
  cart: state.cart,
  auth: state.auth,
});

const mapDispatch = (dispatch) => ({
  setCart: (id) => dispatch(setCart(id)),
  clearCart: () => dispatch(_setCart([])),
});

export default connect(mapState, mapDispatch)(CartLink);
