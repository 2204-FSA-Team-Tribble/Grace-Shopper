import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../store/products.js';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import ReactPaginate from 'react-paginate';

export class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.props.fetchProducts();
    this.setState({ loading: false });
  }

  render() {
    const Loading = () => {
      return (
        <>
          <Skeleton height={100} />
        </>
      );
    };

    const ShowProducts = () => {
      return (
        <>
          {products.map((product) => {
            return (
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.name.substring(0, 15)}...
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-outline-secondary"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      );
    };
    const products = this.props.products.products;
    return (
      <div>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12 mb-5">
              <h1 className="display-6 fw-bolder text-center">Products</h1>
              <hr />
            </div>
          </div>
          <div className="row justify-content-center">
            {this.state.loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return { products: state.products };
};

const mapDispatch = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapState, mapDispatch)(Products);
