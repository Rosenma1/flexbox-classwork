import React from 'react'
import './Header.css'



const Header = () => {
  return (
    <div>
      <section>
<header>
  <div class="nav-links-text"><a href="">Home</a></div>
  <div class="nav-links-text"><a href="">About</a></div>
  <div class="nav-links-text"><a href="">Contact</a></div>
  <div class="nav-links-text"><a href="">Services</a></div>
  </header>

  </section>
  <section class="hero">
    <div class="overlay">
      <div class="hero-content"><h1> Welcome to my Page</h1>
      <p>Learn fullstack development</p>
      <button>Get started</button>
    </div>

    </div>
  </section>
    </div>
  )
}

export default Header
