import React, {useState} from 'react'
import  './login.scss'
import { useNavigate } from 'react-router-dom'
import {auth, provider} from '../../config'
import { signInWithPopup } from "firebase/auth";
import RegistrImage from '../../images/shop.jpg'
const Login = ({isAuth}) => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  function Login1(e) {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("data"))
    if(data.name == name && data.email == email){
      navigate(`/product`)
    } else {
    console.log('error');
    }
  }
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem("Auth", true)
        isAuth(true)
    })
}
  return (

   <div>
      <div className="input-big">
        <div className="input-img">
           <img src={RegistrImage} alt="" />
        </div>
      <div className="input">
        <h1>Log In</h1>
        <hr />
        <form onSubmit={Login1}>
          <input value={name} type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
          <input value={email} type="email" placeholder='gmail' onChange={(e) => setEmail(e.target.value)} />
           <div className="google">
           <button onClick={signInWithGoogle} className='login-with-google-btn'>Sign in with Google</button>
           </div>
          <div className="input-btn">
          <button>sumbit</button>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Login
