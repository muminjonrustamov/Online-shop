import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./product.scss";

const Product = ({set, cart}) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setFilter(res.data);
      return setData(res.data);
    });
  }, []);

  function setBu(p) {
    let arr = [...cart, p]
    set(arr)
    console.log(cart);
  }  

  console.log(data);

  const filterProduct = (cat) => {
    const updatedList = data?.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  
  return (
    <div className="all">
      <div className="btn">
        <button onClick={() => filterProduct("women's clothing")}>
          Women's clothing
        </button>
        <button onClick={() => filterProduct("men's clothing")}>
          Men's clothing
        </button>
        <button onClick={() => filterProduct("electronics")}>
          Electronics
        </button>
        <button onClick={() => filterProduct("jewelery")}>Jewelery</button>
        <button onClick={() => setFilter(data)}>All Products</button>
      </div>
      <div className="cards">
        {filter.map((data, i) => (
          <div
            key={i}
            className="card"
          >
            <div className="card-img">
              <img 
            key={i} src={data.image} alt="" 
            onClick={() =>  navigate(`/product/${data.id}`) } />
            </div>
            <h1>{data.title}</h1>
            <div className="card-text">
              <p>$ {data.price}</p>
              <div className="icon">
                <i className="fa-solid fa-shopping-cart "></i>
                <i className="fa-solid fa-heart"></i>
              </div>
            </div>
            <div className="card-stars">
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <button onClick={()=> setBu(data)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
