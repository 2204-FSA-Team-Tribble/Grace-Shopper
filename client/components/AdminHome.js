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
            <div className="container">
              <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
              <h1 className="display-4">Hello Administrator</h1>
              <p className="lead">Here you can quickly update both users and products. Click on the following links to start making your adjustments.</p>
              </div>
            </div>
            <div className="container">
              <div className="card-deck mb-3 text-center">
                <div className="card mb-4 shadow-sm">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Products</h4>
                  </div>
                  <div className="card-body">
                    <p className="lead">Here you can see all products, update products, create new products and delete products.</p>
                  </div>
                  <div className="container">
                    <Link to="/productsadmin">
                      <button type="button" className="btn btn-lg btn-block btn-outline-secondary">Manage Products</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-deck mb-3 text-center">
                <div className="card mb-4 shadow-sm">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Users</h4>
                  </div>
                  <div className="card-body">
                    <p className="lead">Here you can see all users, update users and create new users.</p>
                  </div>
                  <div className="container">
                    <Link to="/users">
                      <button type="button" className="btn btn-lg btn-block btn-outline-secondary">Manage Users</button>
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
