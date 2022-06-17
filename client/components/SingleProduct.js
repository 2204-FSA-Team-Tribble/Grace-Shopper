import React from 'react';
import { fetchProduct } from '../store/singleProduct.js';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
    this.setState({ loading: false });
  }

  render() {
    let product = this.props.product.product || {};

    const Loading = () => {
      return <>Loading....</>;
    };
    const ShowProduct = () => {
      return (
        <>
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.name}
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">{product.petType}</h4>
            <h3 className="display-7">{product.clothingType}</h3>
            <h3 className="display-6 fw-bold my-4">${product.price}</h3>
            <p className="lead">{product.description}</p>
            <button
              className="btn btn-outline-secondary px-4 py-2"
              onClick={() => addProduct(product)}
            >
              Add to Cart
            </button>
            <NavLink to="/cart" className="btn btn-secondary ms-2 px-3">
              Go to Cart
            </NavLink>
          </div>
        </>
      );
    };

    return (
      <>
        <div className="container py-5">
          <div className="row py-4">
            {this.state.loading ? <Loading /> : <ShowProduct />}
          </div>
        </div>
      </>
    );
  }
}

const mapState = (state) => {
  return { product: state.singleProduct };
};

const mapDispatch = (dispatch) => {
  return {
    fetchProduct: (id) => dispatch(fetchProduct(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
