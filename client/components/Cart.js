import React from 'react';
import { connect } from 'react-redux';
import {
  setCart,
  clearCart,
  modifyProduct,
  removeProduct,
} from '../store/cart';
import { Link } from 'react-router-dom';

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
      <div className="container">
        <div className="table-responsive">
          <div className="row admin-top">
            <div className="col">
              <h1>Shopping Cart</h1>
            </div>
          </div>
          <table className="table table-sm">
            <thead>
              <tr>
                <th></th>
                <th>Item</th>
                <th>Qty</th>
                <th></th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => {
                return (
                  <tr className="cart-item" key={index}>
                    <td>
                      <img
                        className="cart-product-picture"
                        src={`${item.product.image}`}
                      />
                    </td>
                    <td>{item.product.name}</td>

                    <td>
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
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-block btn-danger"
                        type="button"
                        onClick={() => this.props.removeProduct(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                    <td>
                      <strong>${item.price}</strong>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="checkout-total">
            <h5>Total: ${this.props.cart.total}</h5>
            <Link to="/checkout">
              <button
                className="btn btn-md btn-block btn-success"
                type="button"
              >
                Proceed to checkout
              </button>
            </Link>
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
