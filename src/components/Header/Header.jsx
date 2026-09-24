import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <div>
      <section>
<header>
  <div className="nav-links-text"><Link>Home</Link></div>
  <div className="nav-links-text"><Link to="/AboutScreen">About</Link></div>
  <div className="nav-links-text"><Link to ="/ContactScreen">Contact</Link></div>
  <div className="nav-links-text"><Link to="/ServiceScreen">Services</Link></div>
  </header>

  </section>
  
    </div>
  )
}

export default Header
