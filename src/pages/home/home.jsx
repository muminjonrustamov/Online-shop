import React, { useState, useEffect } from "react";
import "./home.scss";
import Right from "../../images/3.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion, useScroll, useSpring } from "framer-motion";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      return setData(res.data);
    });
  }, []);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const navigate = useNavigate();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX, backgroundColor: "blue" }}
      />
      <div className="showcase">
        <div className="showcase-content">
          <div className="left">
            <h1>Lorem, ipsum dolor.</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              <br />
              Magnam nesciunt harum itaque at, eum repudiandae numquam <br />
              eveniet ipsam labore natus esse cupiditate ratione laboriosam?{" "}
              <br />
              In iste qui placeat esse.
            </p>
            <div className="left-btn">
              <button onClick={() => navigate(`/product`)}>Buy Product</button>
            </div>
          </div>
          <div className="right">
            <img src={Right} alt="" />
          </div>
        </div>
      </div>
      <div className="h1">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        />
        <h1>Our Products</h1>
      </div>
      <div className="cards">
        {data.map((data, i) => (
          <div
            key={i}
            className="card"
            onClick={() => navigate(`/product/${data.id}`)}
          >
            <div className="card-img">
              <img src={data.image} alt="" />
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
              <button>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
