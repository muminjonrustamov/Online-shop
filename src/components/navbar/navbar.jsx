import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './navbar.scss'

const Navbar = ({karzina}) => {
    const navigate = useNavigate()
  return (
    <div className='header'>
       <div className="logo">
         <Link to={'/'}> ONLINE<span>SHOP</span></Link>
       </div>
       <ul>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
        </li>
        <li>
            <Link to='/product'>Products</Link>
        </li>
        <li>
            <Link className='link2' to='/login'>Log In</Link>
        </li>
       </ul>
       <div className="icon">
    <i className="fa-solid fa-shopping-cart fa-2x"></i><Link className="title" to={"/cart"}>{karzina.length}</Link>
   </div>
       <div className="btn">
        <button onClick={() => navigate(`/registr`)}>Sign In</button>
       </div>
    </div>
  )
}

export default Navbar
