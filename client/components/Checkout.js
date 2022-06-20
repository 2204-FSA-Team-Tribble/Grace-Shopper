import React from 'react';
import { connect } from 'react-redux';
import { setCart } from '../store/cart';
import { setUser } from '../store/singleUser';
import Form from 'react-bootstrap/Form';

let cartPlaceHolder = [
  {
    name: 'GAPZER Anti-Scratch Cat Shoes',
    image: 'https://m.media-amazon.com/images/I/71EbAjac+pL._AC_UL320_.jpg',
    petType: 'cat',
    clothingType: 'shoes',
    price: 12.99,
  },
  {
    name: 'Dog Life Jackets, Ripstop Pet Floatation ',
    image: 'https://m.media-amazon.com/images/I/71vgo2wI0NL._AC_UL320_.jpg',
    petType: 'dog',
    clothingType: 'swim',
    price: 43.99,
  },
  {
    name: 'CooShou 4 Pieces Bunny Clothes',
    image: 'https://m.media-amazon.com/images/I/71ISX-nW6EL._AC_UL320_.jpg',
    petType: 'other',
    clothingType: 'shirt',
    price: 23.99,
  },
];
//Make sure to pass the isLoggedIn into the props.

export class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: cartPlaceHolder,
      user: {},
    };
  }

  componentDidMount() {
    if (!this.props.auth.id) {
      this.props.clearCart();
    } else {
      this.props.setCart(this.props.auth.id);
      this.props.setUser(this.props.auth.id);
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
    return (
      <div>
        <h3>Checkout Page</h3>
      </div>
      /*
         FEATURES FOR THIS PAGE
         Show the list of XitemsX, total.
         Field to enter Address (populated with address if logged in)
         Field to enter payment
         Submit button that gives a "You did it" pop up
        */

      /* {cart.map((item, index) => {
            return (
              <div className="cart-item" key={index}>
                <img src={item.image} />
                <div>
                  <p>{item.name}</p>
                  <strong>${item.price}</strong>
                  <p>{item.description}</p>
                  <span>Qty: </span>
                </div>
              </div>
            );
          })}
          <div>TOTAL:</div>
          {}
          <button type="button">Complete checkout</button>
         */
    );
  }
}

const mapState = (state) => ({
  cart: state.cart,
  user: state.user,
  auth: state.auth,
});

const mapDispatch = (dispatch) => ({
  getCart: (id) => dispatch(getCart(id)),
});

export default connect(mapState, mapDispatch)(Checkout);
