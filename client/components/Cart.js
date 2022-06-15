import React from 'react'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { setCart, _setCart } from '../store/cart'

const items = [
  { name: 'Dog Romper', price: '20', description: 'Romper for dogs' },
  { name: 'Hamster Hat', price: '40', description: 'Hat for hamsters' },
  { name: 'Kitten Mittens', price: '5', description: 'Mittens for cats' },
]

export class Cart extends React.Component {
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
    const products = this.props.cart || []

    return (
      <div>
        <h3>Shopping Cart</h3>
        {products.map((item, index) => {
          return (
            <div className="cart-item" key={index}>
              <div><img src={`${item.image}`} /></div>
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
        <button type="button">Proceed to checkout</button>
      </div>
    )
  }
}

const mapState = (state) => ({
  cart: state.cart,
  auth: state.auth
})

const mapDispatch = (dispatch) => ({
  setCart: (id) => dispatch(setCart(id)),
  clearCart: () => dispatch(_setCart([]))
})

export default connect(mapState, mapDispatch)(Cart)
