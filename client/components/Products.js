import React from 'react';
import { connect } from 'react-redux';
import {fetchProducts} from '../store/products.js'

export class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const products = this.props.products.products
    return (
      <div>
        <h1>Products</h1>
        {products.map((product) =>{
          return (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <img src={product.image} />
              <p>${product.price}</p>
            </div>
          )
        })}
      </div>

    )
  }
}

const mapState = (state) => {
  return {products: state.products};
};

const mapDispatch = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapState, mapDispatch)(Products)

