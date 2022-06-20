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

export class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      firstname: '',
      lastname: '',
      address: '',

      email: '',
      invalidSubmission: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.id) {
      this.props.setCart(this.props.auth.id);
      this.props.setUser(this.props.match.params.id);
      this.setState({
        id: this.props.user.id,
        firstname: this.props.user.firstname,
        lastname: this.props.user.lastname,
        address: this.props.user.address,
        email: this.props.user.email,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.auth.id !== this.props.auth.id) {
      this.props.setCart(this.props.auth.id);
      this.setState({
        id: this.props.user.id,
        firstname: this.props.user.firstname,
        lastname: this.props.user.lastname,
        address: this.props.user.address,

        email: this.props.user.email,
      });
    }
  }
  handleChange = (event) => {
    let newValue = event.target.value;
    this.setState({
      [event.target.name]: newValue,
    });
  };

  render() {
    const products = this.props.cart.products || cartPlaceHolder;

    return (
      <div>
        <h3>Checkout</h3>
        <h4>Confirm your details below:</h4>
        {products.map((item, index) => {
          return (
            <div className="cart-item" key={index}>
              <div>
                <img src={`${item.image}`} />
              </div>
              <div>
                <p>{item.name}</p>
                <strong>${item.price}</strong>
              </div>
            </div>
          );
        })}
        <h5>Total: ${this.props.cart.total}</h5>
        <h4>Address:</h4>
        <form>
          <div></div>
        </form>
      </div>
      /*
         FEATURES FOR THIS PAGE
         Show the list of XitemsX, XtotalX.
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
  auth: state.auth,
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  setCart: (id) => dispatch(setCart(id)),
  setUser: (id) => dispatch(setUser(id)),
});

export default connect(mapState, mapDispatch)(Checkout);
