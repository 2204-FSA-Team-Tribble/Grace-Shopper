import React from 'react';
import { connect } from 'react-redux';
import { setCart } from '../store/cart';
import { setUser, _setUser } from '../store/singleUser';
import Form from 'react-bootstrap/Form';

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
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.id) {
      this.props.setCart(this.props.auth.id);
      this.props.setUser(this.props.auth.id);
      console.log('mounted');
      this.setState({
        id: this.props.user.id,
        firstname: this.props.user.firstname,
        lastname: this.props.user.lastname,
        address: this.props.user.address,
        email: this.props.user.email,
        zipcode: this.props.user.zipcode,
      });
    }
    console.log('mounted no auth.id');
  }

  componentDidUpdate(prevProps) {
    if (prevProps.auth.id !== this.props.auth.id) {
      this.props.setCart(this.props.auth.id);
      this.props.setUser(this.props.auth.id);
      this.setState({
        id: this.props.user.id,
        firstname: this.props.user.firstname,
        lastname: this.props.user.lastname,
        address: this.props.user.address,
        zipcode: this.props.user.zipcode,
        state: this.props.user.state,
        email: this.props.user.email,
      });
      console.log('updated', this.props);
    }
  }

  handleChange = (event) => {
    let newValue = event.target.value;
    this.setState({
      [event.target.name]: newValue,
    });
  };

  render() {
    const products = this.props.cart.products || [];
    const user = this.state;
    const { handleChange } = this;

    return (
      <div>
        <h3>Checkout</h3>
        <h4>Confirm your details below:</h4>
        {products.map((item, index) => {
          return (
            <div className="cart-item" key={index}>
              <div>
                <p>{item.product.name}</p>
                <strong>${item.price}</strong>
              </div>
            </div>
          );
        })}
        <h5>Total: ${this.props.cart.total}</h5>
        <h4>Address:</h4>
        <p></p>
        <form>
          <div className="input">
            <label htmlFor="firstname">First Name</label>
            <input
              name="firstname"
              onChange={handleChange}
              value={user.firstname || ''}
            />
          </div>
          <div className="input">
            <label htmlFor="lastname">Last Name</label>
            <input
              name="lastname"
              onChange={handleChange}
              value={user.lastname || ''}
            />
          </div>
          <div className="input">
            <label htmlFor="address">Street Address</label>
            <input
              name="address"
              onChange={handleChange}
              value={user.address || ''}
            />
          </div>
          <div className="input">
            <label htmlFor="zipcode">Zipcode</label>
            <input
              name="zipcode"
              onChange={handleChange}
              value={user.zipcode || ''}
            />
          </div>
          <div className="input">
            <label htmlFor="state">State</label>
            <select
              name="state"
              onChange={handleChange}
              value={user.state || ''}
            >
              <option value="AK">AK</option>
              <option value="AL">AL</option>
              <option value="AR">AR</option>
              <option value="AZ">AZ</option>
              <option value="CA">CA</option>
              <option value="CO">CO</option>
              <option value="CT">CT</option>
              <option value="DC">DC</option>
              <option value="DE">DE</option>
              <option value="FL">FL</option>
              <option value="GA">GA</option>
              <option value="HI">HI</option>
              <option value="IA">IA</option>
              <option value="ID">ID</option>
              <option value="IL">IL</option>
              <option value="IN">IN</option>
              <option value="KS">KS</option>
              <option value="KY">KY</option>
              <option value="LA">LA</option>
              <option value="MA">MA</option>
              <option value="MD">MD</option>
              <option value="ME">ME</option>
              <option value="MI">MI</option>
              <option value="MN">MN</option>
              <option value="MO">MO</option>
              <option value="MS">MS</option>
              <option value="MT">MT</option>
              <option value="NC">NC</option>
              <option value="ND">ND</option>
              <option value="NE">NE</option>
              <option value="NH">NH</option>
              <option value="NJ">NJ</option>
              <option value="NM">NM</option>
              <option value="NV">NV</option>
              <option value="NY">NY</option>
              <option value="OH">OH</option>
              <option value="OK">OK</option>
              <option value="OR">OR</option>
              <option value="PA">PA</option>
              <option value="PR">PR</option>
              <option value="RI">RI</option>
              <option value="SC">SC</option>
              <option value="SD">SD</option>
              <option value="TN">TN</option>
              <option value="TX">TX</option>
              <option value="UT">UT</option>
              <option value="VA">VA</option>
              <option value="VT">VT</option>
              <option value="WA">WA</option>
              <option value="WI">WI</option>
              <option value="WV">WV</option>
              <option value="WY">WY</option>
            </select>
          </div>

          <div className="input">
            <label htmlFor="email">Email</label>
            <input
              name="name"
              onChange={handleChange}
              type="email"
              value={user.email || ''}
            />
          </div>
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
