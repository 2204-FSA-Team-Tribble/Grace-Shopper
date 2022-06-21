import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const user = this.props.auth
    return (
      <div>
            <div className="container">
              <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
              <h1 className="display-4">Hello</h1>
              <p className="lead">Welcome to the new shopping experience for pet clothing shopping.</p>
              </div>
            </div>
            <div className="container">
              <div className="card-deck mb-3 text-center">
                <div className="card mb-4 shadow-sm">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Products</h4>
                  </div>
                  <div className="card-body">
                    <p className="lead">Embark on a Journey to make your pet thrive. Click here to find exactly what your pet needs that they never knew they needed.</p>
                  </div>
                  <div className="container">
                    <Link to="/products">
                      <button type="button" className="btn btn-lg btn-block btn-outline-secondary">Products</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 shadow-sm">
                      <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Cart</h4>
                      </div>
                      <div className="card-body">
                        <p className="lead">Check out your cart here.</p>
                      </div>
                      <div className="container">
                        <Link to="/cart">
                          <button type="button" className="btn btn-lg btn-block btn-outline-secondary">Cart</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col'>
                  <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 shadow-sm">
                      <div className="card-header">
                        <h4 className="my-0 font-weight-normal">My Profile</h4>
                      </div>
                      <div className="card-body">
                        <p className="lead">Make updates your information here.</p>
                      </div>
                      <div className="container">
                        <Link to="/useradmin">
                          <button type="button" className="btn btn-lg btn-block btn-outline-secondary">My Profile</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
  }
}

export default connect(null,null)(UserHome)
