import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './singleproduct.scss'

const SingleProduct = () => {
    const [data, setData] = useState([])
    const myparams = useParams()

    useEffect(() => {
      axios.get(`https://fakestoreapi.com/products/${myparams.id}`)
        .then((res) => setData(res.data));
  
    }, [])
    console.log(data);
  return (
    <div className="card">
        <div className="left">
<img src={data.image} alt="" />
        </div>
        <div className="right">
       <h3>{data.title}</h3>
       <p>{data.description}</p>
       <div className="card-text">
              <p>$ {data.price}</p>
              <div className="icon">
                <i className="fa-solid fa-shopping-cart "></i>
                <i className="fa-solid fa-heart"></i>
              </div>
            </div>
     <div className="card-btn">
      <button>Buy</button>
     </div>
        </div>
    </div>
  )
}

export default SingleProduct