import React from 'react';
import {fetchProduct} from '../store/singleProduct.js';
import {connect} from 'react-redux';

class SingleProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }

  render() {
    let product = this.props.product.product || {}

    return (
      <div>
        <div>
          <h2>{product.name}</h2>
          <img src={product.image} />
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {product: state.singleProduct};
};

const mapDispatch = (dispatch) => {
  return {
    fetchProduct: (id) => dispatch(fetchProduct(id))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
