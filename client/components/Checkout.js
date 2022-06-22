import React from 'react';
import { connect } from 'react-redux';
import { setCart, checkoutCart } from '../store/cart';
import { setUser } from '../store/singleUser';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 0,
      orderId: 0,
      firstname: '',
      lastname: '',
      address: '',
      state: 'AL',
      zipcode: 10000,
      email: '',
      total: 0,
      status: 'cart',
      completedOrderId: 0,
      invalidSubmission: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.id) {
      this.props.setCart(this.props.auth.id);
      this.props.setUser(this.props.auth.id);
      this.setState({
        userId: this.props.user.id,
        orderId: this.props.cart.orderId,
        firstname: this.props.user.firstname,
        lastname: this.props.user.lastname,
        address: this.props.user.address,
        email: this.props.user.email,
        zipcode: this.props.user.zipcode,
        total: this.props.cart.total,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.auth.id !== this.props.auth.id) {
      this.props.setCart(this.props.auth.id);
      this.props.setUser(this.props.auth.id);
    }
    if (
      prevProps.user.id !== this.props.user.id ||
      prevProps.cart.orderId !== this.props.cart.orderId
    ) {
      this.setState({
        id: this.props.user.id,
        orderId: this.props.cart.orderId,
        firstname: this.props.auth.firstname,
        lastname: this.props.user.lastname,
        address: this.props.user.address,
        zipcode: this.props.user.zipcode,
        state: this.props.user.state,
        email: this.props.user.email,
        total: this.props.cart.total,
      });
    }
  }

  handleChange = (event) => {
    let newValue = event.target.value;
    this.setState({
      [event.target.name]: newValue,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const s = this.state;
    let updatedOrder = {
      orderId: s.orderId,
      firstname: s.firstname,
      lastname: s.lastname,
      address: s.address,
      state: s.state,
      zipcode: s.zipcode,
      email: s.email,
      total: s.total,
    };
    this.setState({ completedOrderId: s.orderId, status: 'complete' });

    this.props.checkoutCart(this.state.orderId, updatedOrder);
  };

  render() {
    const products = this.props.cart.products || [];
    const userOrder = this.state;
    const { handleChange, handleSubmit } = this;
    if (this.state.status === 'complete') {
      return (
        <Alert variant="success">
          <Alert.Heading>
            Congrats, order {this.state.completedOrderId} is complete
          </Alert.Heading>
        </Alert>
      );
    } else if (products.length<1){
      return (<div>
        <Alert variant='danger'>
          <Alert.Heading>
            Oops! Looks like you don't have any items in your cart to check out.
          </Alert.Heading>
        </Alert>
      </div>)
    }
    else{
      return (
        <div>
          <h3>Checkout</h3>
          <h4>Confirm your details below:</h4>
          {products.map((item, index) => {
            return (
              <div className="cart-item" key={index}>
                <div>
                  <p>
                    {item.product.name}: <strong>${item.price}</strong>
                  </p>
                </div>
              </div>
            );
          })}
          <h5>Total: ${userOrder.total}</h5>
          <h4>Address:</h4>
          <p></p>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  name="firstname"
                  onChange={handleChange}
                  value={userOrder.firstname || ''}
                />
              </Col>
              <Col>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  name="lastname"
                  onChange={handleChange}
                  value={userOrder.lastname || ''}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label>Street Address</Form.Label>
              <Form.Control
                name="address"
                onChange={handleChange}
                value={userOrder.address || ''}
              />
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>Zipcode</Form.Label>
                <Form.Control
                  name="zipcode"
                  onChange={handleChange}
                  value={userOrder.zipcode || ''}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label htmlFor="state">State</Form.Label>
                <Form.Select
                  name="state"
                  onChange={handleChange}
                  value={userOrder.state || ''}
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
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="name"
                  onChange={handleChange}
                  type="email"
                  value={userOrder.email || ''}
                />
              </Form.Group>
            </Row>
          </Form>
          <p></p>
          <Button onClick={handleSubmit}> Submit Address and Payment</Button>
        </div>
        /*
      FEATURES FOR THIS PAGE
      Show the list of XitemsX, XtotalX.
      X Field to enter Address (populated with address if logged in)
      Field to enter payment
      Submit button that gives a "You did it" pop up
      */
      );
    }
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
  checkoutCart: (orderId, order) => dispatch(checkoutCart(orderId, order)),
});

export default connect(mapState, mapDispatch)(Checkout);
