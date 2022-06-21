import React from 'react';
import Products from './Products';
import FilterProducts from './filterProducts';

const Home = () => {
  return (
    <>
      <div>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12 mb-5">
              <h1 className="display-6 fw-bolder text-center">
                WELCOME TO FUREVER21
              </h1>
              <h4 className="display-7  text-center">
                WHERE YOUR PET WOULD SHOP
              </h4>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div>
        <FilterProducts />
      </div>
    </>
  );
};

export default Home;
