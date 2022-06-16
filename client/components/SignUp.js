import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { authenticate } from '../store';

const SignUp = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit} name={name}>
            <Form.Group className="mb-3" controlId="formSignUpButtons">
              <Button className="btn btn-primary w-100 mb-4">
                <span className="fa fa-google me-2"></span>
                Sign up With Google
              </Button>
              <Button className="btn btn-primary w-100 mb-4">
                <span className="fa fa-facebook me-2"></span> Sign up With
                Facebook
              </Button>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                type="username"
                placeholder="Username"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
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

            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>

            <Form.Group
              className="mb-3 form-check"
              controlId="formBasicCheckbox"
            >
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              {displayName}
            </Button>
            {error && error.response && <div> {error.response.data} </div>}
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
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

export const Signup = connect(mapSignup, mapDispatch)(SignUp);
