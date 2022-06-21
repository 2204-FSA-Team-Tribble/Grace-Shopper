import React from 'react';
import {createProduct} from '../store/createProduct';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class CreateProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      clothingType: 'shirt',
      image: '',
      petType: 'dog',
      price: undefined,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
    [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createProduct({...this.state});
  }
  render() {
    const { name, clothingType, image, petType, price} = this.state;
    const { handleSubmit, handleChange} = this;
    const user = this.props.auth
    return (
      <div className='container'>
        {user.isAdmin ? (<div className="form">
          <div className='row admin-top'>
            <div className='col'><h1>Create a new Product</h1></div>
            <div className='col'><Link to="/productsadmin"><button className="btn btn-md btn-block btn-primary admin-right-button">Cancel</button></Link></div>
          </div>
        <div className='text-center'>
          <form id='product-form' onSubmit={handleSubmit}>
            <div className='row'>
              <div className='col'>
                <label className='lead' htmlFor='name'>Product Name: </label>
                <input class="form-control" name='name' onChange={handleChange} value={name} />
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <label className='lead' htmlFor='clothingType'>Clothing Type: </label>
                <select class="form-control" name='clothingType' onChange={handleChange} value={clothingType}>
                  <option value='shirt'>shirt</option>
                  <option value='dress'>dress</option>
                  <option value='coat'>coat</option>
                  <option value='swim'>swim</option>
                  <option value='shoes'>shoes</option>
                  <option value='other'>other</option>
                </select>
              </div>
              <div className='col'>
                <label className='lead' htmlFor='petType'>Pet Type </label>
                <select class="form-control" name='petType' onChange={handleChange} value={petType}>
                  <option value='dog'>dog</option>
                  <option value='cat'>cat</option>
                  <option value='horse'>horse</option>
                  <option value='other'>other</option>
                </select>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <label className='lead' htmlFor='price'>Price: </label>
                <input class="form-control" name='price' onChange={handleChange} value={price} type='number' step='.01'/>
              </div>
              <div className='col'>
                <label className='lead' htmlFor='image'>Product Image: </label>
                <input class="form-control" name='image' onChange={handleChange} value={image} />
              </div>
            </div>
            <div>
              <button type="submit" className="btn btn-lg btn-block btn-success">Submit</button>
            </div>
          </form>
           <img src={image} />
        </div>

      </div>) : (
          <div>
            <h1>
              Access Denied
            </h1>
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

const mapDispatch = (dispatch, {history}) => ({
  createProduct: (product) => dispatch(createProduct(product, history))
});

export default connect(mapState, mapDispatch)(CreateProduct)
