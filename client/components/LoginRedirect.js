import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

export class LoginRedirect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const user = this.props.auth;
    return (
      <div>
        {user.isAdmin ? (
          <Redirect to='/adminhome' />
        ) : (
          <div>
            <h1>Hello User</h1>
          </div>
        )}
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapState, null)(LoginRedirect);
