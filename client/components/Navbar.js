import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../store';
import CartLink from './CartLink';

const Navbar = ({ handleClick, isLoggedIn }) => {
  return (
    <div>
      <nav id="navbar_top">
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
              <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4" to="/">
                  FUREVER_21
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/products">
                        Products
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">
                        Contact
                      </NavLink>
                    </li>
                  </ul>

                  <div className="button">
                    <NavLink
                      to="/login"
                      onClick={handleClick}
                      className="btn btn-outline-secondary ms-2"
                    >
                      <i className="fa fa-user-plus me-1"></i>
                      Logout
                    </NavLink>
                    <NavLink
                      to="/loginredirect"
                      className="btn btn-outline-secondary ms-2"
                    >
                      <i className="fa fa-user-plus me-1"></i>
                      Home
                    </NavLink>

                    <CartLink />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
              <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4" to="/">
                  FUREVER_21
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/products">
                        Products
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">
                        Contact
                      </NavLink>
                    </li>
                  </ul>

                  <div className="button">
                    <NavLink to="/login" className="btn btn-outline-secondary">
                      <i className="fa fa-sign-in me-1"></i>Login
                    </NavLink>
                    <NavLink
                      to="/signup"
                      className="btn btn-outline-secondary ms-2"
                    >
                      <i className="fa fa-user-plus me-1"></i>Signup
                    </NavLink>

                    <CartLink />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      document.getElementById('navbar_top').classList.add('fixed-top');
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      this.document.getElementById('navbar_top').classList.remove('fixed-top');
      this.document.body.style.paddingTop = '0';
    }
  });
});

export default connect(mapState, mapDispatch)(Navbar);
