import React, {useState} from 'react'

import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  function Login1(e) {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("data"))
    if(data.name == name && data.email == email){
      navigate(`/users`)
    } else {
    console.log('error');
    }
  }

  return (
    <div className="biggest">
      <h1>Login</h1>
 <div className='login'>  
      <form onSubmit={Login1}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='name' />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' />
      <div className="btn">
      <button>submit</button>
      </div>
      </form>
    </div>
    </div>
  )
}

export default Login
