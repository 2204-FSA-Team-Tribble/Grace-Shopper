import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/products.js';
import { NavLink } from 'react-router-dom';

const FilterProducts = () => {
  const [filter, setFilter] = useState([]);
  const [isloading, setisLoading] = useState(true);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    setFilter(products);
    setisLoading(false);
    dispatch(fetchProducts());
  }, [dispatch]);

  const Loading = () => {
    return <>Loading....</>;
  };

  const filteredPets = (cat) => {
    const updatedList = products.filter((x) => x.petType === cat);
    setFilter(updatedList);
  };
  const filteredProducts = (cat) => {
    const updateCloth = products.filter((x) => x.clothingType === cat);
    setFilter(updateCloth);
  };

  return (
    <>
      <div className="container  my-5 py-5">
        <div>
          <div>
            <p>Shop By Pet</p>
          </div>

          <NavLink to="/dog" className="btn">
            <img
              src="https://media.istockphoto.com/photos/playful-happy-smiling-pet-dog-running-in-the-grass-picture-id1320018473?b=1&k=20&m=1320018473&s=170667a&w=0&h=Q-U9yI4JjCJYSAzXZwpnM4HuaXPzo4K-vBsgO7lanyo="
              onClick={() => filteredProducts('dog')}
              className="card-img-top"
              alt="dog"
              height="70px"
            />
            <p className="display-7">Dog</p>
          </NavLink>

          <NavLink to="/cat" className="btn">
            <img
              src="https://nationaltoday.com/wp-content/uploads/2020/08/international-cat-day.jpg"
              onClick={() => filteredPets('cat')}
              className="card-img-top"
              alt="cat"
              height="70px"
            />
            <p className="display-7">Cat</p>
          </NavLink>

          <NavLink to="/horse" className="btn">
            <img
              src="https://m.media-amazon.com/images/I/71NUxuvSGuL._AC_SX679_.jpg"
              onClick={() => filteredPets('horse')}
              className="card-img-top"
              alt="horse"
              height="70px"
            />
            <p className="display-7">Horse</p>
          </NavLink>

          <NavLink to="/other" className="btn">
            <img
              src="https://images.unsplash.com/photo-1566650554919-44ec6bbe2518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwYW5pbWFsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              onClick={() => filteredPets('other')}
              className="card-img-top"
              alt="other"
              height="70px"
            />
            <p className="display-7">Other</p>
          </NavLink>
        </div>

        <div>
          <p>Shop By Pet</p>
        </div>

        <a href="/dog" className="btn">
          <img
            src="https://media.istockphoto.com/photos/playful-happy-smiling-pet-dog-running-in-the-grass-picture-id1320018473?b=1&k=20&m=1320018473&s=170667a&w=0&h=Q-U9yI4JjCJYSAzXZwpnM4HuaXPzo4K-vBsgO7lanyo="
            onClick={() => filteredProducts('dog')}
            className="card-img-top"
            alt="dog"
            height="70px"
          />
          <p className="display-7">Dog</p>
        </a>

        <NavLink to="/cat" className="btn">
          <img
            src="https://nationaltoday.com/wp-content/uploads/2020/08/international-cat-day.jpg"
            onClick={() => filteredPets('cat')}
            className="card-img-top"
            alt="cat"
            height="70px"
          />
          <p className="display-7">Cat</p>
        </NavLink>

        <NavLink to="/horse" className="btn">
          <img
            src="https://m.media-amazon.com/images/I/71NUxuvSGuL._AC_SX679_.jpg"
            onClick={() => filteredPets('horse')}
            className="card-img-top"
            alt="horse"
            height="70px"
          />
          <p className="display-7">Horse</p>
        </NavLink>

        <NavLink to="/other" className="btn">
          <img
            src="https://images.unsplash.com/photo-1566650554919-44ec6bbe2518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwYW5pbWFsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            onClick={() => filteredPets('other')}
            className="card-img-top"
            alt="other"
            height="70px"
          />
          <p className="display-7">Other</p>
        </NavLink>
      </div>

      <div>
        <p>Shop By Style</p>
        <NavLink to="#" className="btn">
          <img
            src="https://target.scene7.com/is/image/Target/GUEST_c0ff45d1-ffad-4cf3-876e-309a86fb4727"
            onClick={() => filteredProducts('shirt')}
            className="card-img-top"
            alt="shirt"
            height="70px"
          />
          <p className="display-7">Shirt</p>
        </NavLink>

        <NavLink to="#" className="btn border-0">
          <img
            src="https://i.etsystatic.com/5263554/r/il/381019/3583717338/il_794xN.3583717338_tqz6.jpg"
            onClick={() => filteredProducts('coat')}
            className="card-img-top"
            alt="coat"
            height="70px"
          />
          <p className="display-7">Coat</p>
        </NavLink>

        <NavLink to="#" className="btn ">
          <img
            src="https://i.etsystatic.com/9537070/r/il/4348b0/1382727019/il_794xN.1382727019_efyx.jpg"
            onClick={() => filteredProducts('dress')}
            className="card-img-top"
            alt="dress"
            height="70px"
          />
          <p className="display-7">Dress</p>
        </NavLink>

        <NavLink to="#" className="btn ">
          <img
            src="https://img.ltwebstatic.com/images3_pi/2022/04/12/1649751192467cf61d0190358da945e945434d6868_thumbnail_600x.webp"
            onClick={() => filteredProducts('swim')}
            className="card-img-top"
            alt="swim"
            height="70px"
          />
          <p className="display-7">Swim</p>
        </NavLink>

        <NavLink to="#" className="btn ">
          <img
            src="https://i.s-madewell.com/is/image/madewell/M8909_EC5461_d1?wid=700&hei=889&fmt=jpeg&fit=crop&qlt=75,1&resMode=bisharp&op_usm=0.5,1,5,0"
            onClick={() => filteredProducts('shoes')}
            className="card-img-top"
            alt="shoes"
            height="70px"
          />
          <p className="display-7">Shoes</p>
        </NavLink>

        <NavLink to="#" className="btn ">
          <img
            src="https://img.chewy.com/is/image/catalog/349699_MAIN._AC_SS108_V1640065014_.jpg"
            onClick={() => filteredProducts('other')}
            className="card-img-top"
            alt="other"
            height="70px"
          />
          <p className="display-7">Other</p>
        </NavLink>
      </div>
    </>
  );
};

export default FilterProducts;
