import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/products';
import { NavLink } from 'react-router-dom';

const Dog = () => {
  const [type, setType] = useState('all');
  const [isloading, setisLoading] = useState(true);

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    setisLoading(false);
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleChange = (e) => {
    e.preventDefault();
    setType(e.target.value);
  };

  const Loading = () => {
    return <>Loading....</>;
  };

  const Dogs = products.filter((pet) => pet.petType === 'dog');
  const filteredDog = Dogs.filter((pet) => {
    if (type === 'all') {
      return pet.clothingType;
    } else if (type === 'shirt') {
      return pet.clothingType === 'shirt';
    } else if (type === 'coat') {
      return pet.clothingType === 'coat';
    } else if (type === 'dress') {
      return pet.clothingType === 'dress';
    } else if (type === 'swim') {
      return pet.clothingType === 'swim';
    } else if (type === 'shoes') {
      return pet.clothingType === 'shoes';
    } else if (type === 'other') {
      return pet.clothingType === 'other';
    }
  });

  const ShowProducts = () => {
    return (
      <>
        <div className="pet-list">
          <label>
            Select a Style:
            <select className="form-select" onChange={handleChange}>
              <option value="all">All</option>
              <option value="shirt">Shirt</option>
              <option value="coat">Coat</option>
              <option value="dress">Dress</option>
              <option value="swim">Swim</option>
              <option value="shoes">Shoes</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>

        <div className="button d-flex justify-content-center mb-5 pb-5"></div>
        {filteredDog.map((product) => {
          return (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 text-center p-4">
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
                  <NavLink
                    to={`/products/${product.id}`}
                    className="btn btn-outline-secondary"
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Dog</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {isloading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Dog;
