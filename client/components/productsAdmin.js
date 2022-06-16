import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../store/products.js'
import { deleteProduct } from '../store/deleteProduct.js'
import { Link } from 'react-router-dom'

export class ProductsAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  handleDelete(id) {
    this.props.deleteProduct(id)
  }

  render() {
    const products = this.props.products.products
    return (
      <div>
        <h1>Products - Admin</h1>
        <div>
            <Link to="/createProduct">
              <button className="section-button" type='button'>
                Create a product
              </button>
            </Link>
          </div>
        {products.map((product) =>{
          return (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <img src={product.image} />
              <p>${product.price}</p>
              <button className='delete' onClick={
                  (evt) => {
                      this.handleDelete(product.id);
                    }
                  }>X
              </button>
              <Link to={`/productsadmin/${product.id}`}>
              <button
              >
                Update
              </button>
                </Link>
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

const mapDispatch = (dispatch, {history}) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    deleteProduct: (product) => dispatch(deleteProduct(product, history))
  }
}

export default connect(mapState, mapDispatch)(ProductsAdmin)
