import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./product.scss";

import { motion, useScroll, useSpring } from "framer-motion";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });


  console.log(data);

  const filterProduct = (cat) => {
    const updatedList = data?.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const notify = () => {
    toast.success('Complete Buy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  
  return (
  <>
    <motion.div
    className="progress-bar"
    style={{ scaleX, backgroundColor: "blue" }}
  />
    <div className="all">
         <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
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
              <button onClick={notify}>Add to Cart</button>
           
            </div>
          </div>
        ))}
      </div>
    </div>
  
  </>
  );
};

export default Product;
