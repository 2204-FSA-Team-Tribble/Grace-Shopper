import React from 'react'
import { connect } from 'react-redux'
import { setCart, _setCart, _setTotal } from '../store/cart'

export class Cart extends React.Component {
  componentDidMount() {
    if (!this.props.auth.id) {
      this.props.clearCart()
    } else {
      this.props.setCart(this.props.auth.id)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.auth.id !== this.props.auth.id) {
      if (!this.props.auth.id) {
        this.props.clearCart()
      } else {
        this.props.setCart(this.props.auth.id)
      }
    }
  }

  render() {
    const products = this.props.cart.products || []

    return (
      <div>
        <h3>Shopping Cart</h3>
        {products.map((item, index) => {
          return (
            <div className="cart-item" key={index}>
              <div>
                <img src={`${item.image}`} />
              </div>
              <div>
                <p>{item.name}</p>
                <strong>${item.price}</strong>
                <p>{item.description}</p>
                <span>Qty: </span>
                <select name="quantity">
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
                <button type="button">Remove</button>
              </div>
            </div>
          )
        })}
        <h5>Total: ${this.props.cart.total}</h5>
        <button type="button">Proceed to checkout</button>
      </div>
    )
  }
}

const mapState = (state) => ({
  cart: state.cart,
  auth: state.auth,
})

const mapDispatch = (dispatch) => ({
  setCart: (id) => dispatch(setCart(id)),
  clearCart: () => dispatch(_setCart([], 0)),
})

export default connect(mapState, mapDispatch)(Cart)
