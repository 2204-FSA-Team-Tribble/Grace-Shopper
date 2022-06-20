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
    const user = this.props.auth
    return (
      <div>
        {user.isAdmin ? (
          <div className='container'>
            <div className="table-responsive">
              <div className='row admin-top'>
                  <div className='col'><h1>All Products</h1></div>
                  <div className='col'><Link to="/createProduct"><button className="btn btn-md btn-block btn-primary admin-right-button">Create New Product</button></Link></div>
                </div>
             <div>
            </div>
            <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {products.map((product) =>{
              return (
                <tr className='product' key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>
                    <button className="btn btn-sm btn-block btn-danger" onClick={
                        (evt) => {
                            this.handleDelete(product.id);
                          }
                        }>Delete
                    </button>
                  </td>
                  <td>
                  <Link to={`/productsadmin/${product.id}`}>
                    <button className="btn btn-sm btn-block btn-success"
                    >
                      Update
                    </button>
                      </Link>
                  </td>
                </tr>
              )
            })}
            </tbody>
            </table>
            </div>
          </div>
        ) :(<div>
          <h1>Access Denied</h1>
          </div>
          )}

      </div>

    )
  }
}

const mapState = (state) => {
  return {
    products: state.products,
    auth: state.auth
  };
};

const mapDispatch = (dispatch, {history}) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    deleteProduct: (product) => dispatch(deleteProduct(product, history))
  }
}

export default connect(mapState, mapDispatch)(ProductsAdmin)
