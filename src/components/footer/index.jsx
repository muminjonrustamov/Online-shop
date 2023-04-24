import React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h1>ONLINE<span>SHOP</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur <br />
                       adipisicing elit. Eaque natus quod modi <br />
                       sapiente nihil dolorum quas, delectus <br />
                        magni minus dicta?</p>
                        <div className="footer-icon">
                            <i className='fa-brands fa-facebook'></i>
                            <i className='fa-brands fa-youtube'></i>
                            <i className='fa-brands fa-instagram'></i>
                        </div>
                </div>
                <div className="footer-col">
                    <h1>INFORMATION</h1>
                    <ul>
                        <li>
                            <Link>Contact us</Link>
                        </li>
                        <li>
                            <Link>New Collection</Link>
                        </li>
                        <li>
                            <Link>Best Salles</Link>
                        </li>
                        <li>
                            <Link>Manufactures</Link>
                        </li>
                        <li>
                            <Link>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link>FAQ?</Link>
                        </li>
                        <li>
                            <Link>Terms & Condition</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h1>THE SERVICES</h1>
                    <ul>
                        <li>
                            <Link>My Account</Link>
                        </li>
                        <li>
                            <Link>Order History</Link>
                        </li>
                        <li>
                            <Link>Vendor Contact</Link>
                        </li>
                        <li>
                            <Link>Shop Page</Link>
                        </li>
                        <li>
                            <Link>Virtuemart Categories</Link>
                        </li>
                        <li>
                            <Link>Search Results</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h1>Address</h1>
                    <p>yakkasaroy street</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.701487414073!2d69.22979951528586!3d41.27183507927497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b7d1264f903%3A0x499ccc2b9de57f46!2sIMPACT.T%20technology%20hub!5e0!3m2!1sru!2s!4v1680100459564!5m2!1sru!2s" width="600" height="450"></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
