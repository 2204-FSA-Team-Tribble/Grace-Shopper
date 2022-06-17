import React from 'react';
import Products from './Products';

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white">
        <img
          src="https://marvel-b1-cdn.bc0a.com/f00000000052994/www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/dog-care/Skyword/images/azawakh-dog-standing-on-path-SW.jpg"
          className="card-img"
          alt="https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3529479-center-1"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title dispaly-3 fw-bolder mb-0">
              NEW ARRIVALS
            </h5>
            <p className="card-text lead fs-2">WHERE YOUR PET WOULD SHOP </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
