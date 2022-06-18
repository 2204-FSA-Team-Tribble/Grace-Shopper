import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class AdminHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const user = this.props.auth
    return (
      <div>
        {user.isAdmin ? (
          <div>
            <div class="container">
              <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
              <h1 class="display-4">Hello Administrator</h1>
              <p class="lead">Here you can quickly update both users and products. Click on the following links to start making your adjustments.</p>
              </div>
            </div>
            <div class="container">
              <div class="card-deck mb-3 text-center">
                <div class="card mb-4 shadow-sm">
                  <div class="card-header">
                    <h4 class="my-0 font-weight-normal">Products</h4>
                  </div>
                  <div class="card-body">
                    <p class="lead">Here you can see all products, update products, create new products and delete products.</p>
                  </div>
                  <div class="container">
                    <Link to="/productsadmin">
                      <button type="button" class="btn btn-lg btn-block btn-outline-secondary">Manage Products</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="card-deck mb-3 text-center">
                <div class="card mb-4 shadow-sm">
                  <div class="card-header">
                    <h4 class="my-0 font-weight-normal">Users</h4>
                  </div>
                  <div class="card-body">
                    <p class="lead">Here you can see all users, update users and create new users.</p>
                  </div>
                  <div class="container">
                    <Link to="/users">
                      <button type="button" class="btn btn-lg btn-block btn-outline-secondary">Manage Users</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1>Access Denied</h1>
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

export default connect(mapState, null)(AdminHome);
