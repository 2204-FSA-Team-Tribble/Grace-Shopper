import React from 'react'

const Cart = () => {
  // Placeholder cart array
  const cart = [
    { name: 'Dog Romper', price: '20', description: 'Romper for dogs' },
    { name: 'Hamster Hat', price: '40', description: 'Hat for hamsters' },
    { name: 'Kitten Mittens', price: '5', description: 'Mittens for cats' },
  ]

  return (
    <div>
      <h3>Shopping Cart</h3>
      {cart.map((item) => {
        return (
          <div className="cart-item">
            <div>{/* Image Placeholder */}</div>
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

export default Cart
