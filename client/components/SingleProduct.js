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
    const {product} = this.props;

    return (
      // <div key={product.id}>
      //   <h2>{product.name}</h2>
      //   <img src={product.image} />
      //   <p>{product.description}</p>
      //   <p>${product.price}</p>
      // </div>
      <div>hello</div>
    )
  }
}

const mapState = (state) => {
  return {product: state.product};
};

const mapDispatch = (dispatch) => {
  return {
    fetchProduct: (id) => dispatch(fetchProduct(id))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
