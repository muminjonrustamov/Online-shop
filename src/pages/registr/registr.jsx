import React, { useState } from 'react'
import './registr.scss'
import {auth, provider} from '../../config'
import { signInWithPopup } from "firebase/auth";

import RegistrImage from '../../images/shop.jpg'
import { useNavigate } from 'react-router-dom';


const Registr = ({isAuth}) => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem("Auth", true)
        isAuth(true)
    })
}
const navigate = useNavigate()
  const [name, setName] = useState('')
  const [login, setLogin] = useState('')
  const [email, setEmail] = useState('')

  function Form(e) {
    e.preventDefault()
    localStorage.setItem("data", JSON.stringify({email, name, login}))
    console.log(name);
    console.log(login);
    console.log(email);
    setLogin('')
    setEmail('')
    setName('')
  }
  return (
    <div>
      <div className="input-big">
        <div className="input-img">
           <img src={RegistrImage} alt="" />
        </div>
      <div className="input">
        <form onSubmit={Form}>
          <input value={name} type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
          <input value={login} type="password" placeholder='password' onChange={(e) => setLogin(e.target.value)} />
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

export default Registr