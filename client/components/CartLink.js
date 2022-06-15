import React from 'react'
import { connect } from 'react-redux'
import { setCart, _setCart } from '../store/cart'
import { Link } from 'react-router-dom'

export class CartLink extends React.Component {
  componentDidMount() {
    if (this.props.auth.id) {
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
    const cartQuantity = this.props.cart.length || 0

    return <Link to="/card">{`Shopping Cart (${cartQuantity})`}</Link>
  }
}

const mapState = (state) => ({
  cart: state.cart,
  auth: state.auth,
})

const mapDispatch = (dispatch) => ({
  setCart: (id) => dispatch(setCart(id)),
  clearCart: () => dispatch(_setCart([])),
})

export default connect(mapState, mapDispatch)(CartLink)
