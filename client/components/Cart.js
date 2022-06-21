import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  setCart,
  clearCart,
  modifyProduct,
  removeProduct,
} from '../store/cart';

export class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

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

  handleChange(event, item) {
    let newQuantity = Number(event.target.value);
    this.props.modifyProduct(item.id, newQuantity);
    this.setState({
      cart: this.props.cart,
    });
  }

  render() {
    const products = this.props.cart.products || [];

    return (
      <div>
        <h3>Shopping Cart</h3>
        {products.map((item, index) => {
          return (
            <div className="cart-item" key={index}>
              <div>
                <img src={`${item.product.image}`} />
              </div>
              <div>
                <p>{item.product.name}</p>
                <strong>${item.price}</strong>
                <p>{item.description}</p>
                <span>Qty: </span>
                <select
                  name="quantity"
                  onChange={(event) => this.handleChange(event, item)}
                  value={this.props.cart.products[index].quantity}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <button
                  type="button"
                  onClick={() => this.props.removeProduct(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
        <h5>Total: ${this.props.cart.total}</h5>
        <div className="container">
          <div className="row">
            <NavLink
              to="/checkout"
              className="btn btn-outline-secondary mb-5 w-25 mx-auto"
            >
              Proceed to Checkout
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  cart: state.cart,
  auth: state.auth,
});

const mapDispatch = (dispatch) => ({
  setCart: (id) => dispatch(setCart(id)),
  clearCart: () => dispatch(clearCart()),
  modifyProduct: (id, quantity) => dispatch(modifyProduct(id, quantity)),
  removeProduct: (id) => dispatch(removeProduct(id)),
});

export default connect(mapState, mapDispatch)(Cart);
