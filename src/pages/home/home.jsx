import React, {useState, useEffect} from 'react'
import './home.scss'
import Right from '../../images/3.png'
import { useNavigate } from 'react-router-dom'
import axios from "axios";


const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      return setData(res.data);
    });
  }, []);
  const navigate = useNavigate()
  return (
   <>
    <div className='showcase'>  
      <div className="showcase-content">
        <div className="left">
          <h1>Lorem, ipsum dolor.</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br />
             Magnam nesciunt harum itaque at, eum repudiandae numquam <br />
             eveniet ipsam labore natus esse cupiditate ratione laboriosam? <br />
            In iste qui placeat esse.</p>
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
  )
}

export default Home
