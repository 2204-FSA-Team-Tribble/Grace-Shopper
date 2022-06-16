import React from 'react';
import { Container, Card, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { authenticate } from '../store';

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;
  // const [userName, setUsename] = useState('')
  // const [password, setPassword] = useState('')
  // const error = useSelector (state => state.auth.error)
  // const dispatch = useDispatch()

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   dispatch(authenticate(userName, password, formName))
  // }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Container>
            <div className="parent-div">
              <div className="exampldiv">
                <Card className="card-style">
                  <h1 className="login-heading">Login</h1>
                  <Form
                    onSubmit={handleSubmit}
                    name={name}
                    style={{ margin: '30px' }}
                  >
                    <Form.Group className="mb-3" controlId="formBasicUserName">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        name="username"
                        type="username"
                        placeholder="Username"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        name="password"
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Group>

                    <a href="/#" className="forget-link">
                      Forgot password?
                    </a>
                    <Button variant="primary" type="submit" className="button">
                      {displayName}
                    </Button>
                    <div>
                      {error && error.response && (
                        <div> {error.response.data} </div>
                      )}
                    </div>
                    <div className="signup-link">
                      <a
                        href="/signup"
                        style={{ textDecoration: 'none', fontSize: '17px' }}
                      >
                        Create Account
                      </a>
                    </div>
                  </Form>
                </Card>
              </div>
            </div>
          </Container>
        </header>
      </div>
    </>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error,
  };
};

const mapDispatchLogin = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      dispatch(authenticate(username, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatchLogin)(AuthForm);
