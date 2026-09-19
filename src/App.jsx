import React from 'react'
import image from './assets/image2.jpg'
import image1 from './assets/image1.jpg'
import image3 from './assets/image3.jpg'

const App = () => {
  return (
    <div>
      
  <section>
<header>
  <div className="nav-links-text"><a href="">Home</a></div>
  <div className="nav-links-text"><a href="">About</a></div>
  <div className="nav-links-text"><a href="">Contact</a></div>
  <div className="nav-links-text"><a href="">Services</a></div>
  </header>

  </section>
  <section className="hero">
    <div className="overlay">
      <div className="hero-content"><h1> Welcome to my Page</h1>
      <p>Learn fullstack development</p>
      <button>Get started</button>
    </div>

    </div>
  </section>

  <section className="about">
    <div className="about-text">
      <h3>About Us</h3>
      <h2>building skills, <br/> building future </h2>
      <p>At morning className digital skill academy that helps you create a future</p>
      <ul>
        <li> &#10004;Practical Hands-on learning</li>
        <li> &#10004; Expert Instructors</li>
        <li> &#10004;flexible learning Schedule</li>
        
      </ul>
      <a href="#" className="btn">Learn More</a>

    </div>
    <div className="about-image">

    <img src="/Users/mac/Downloads/student learning.jpeg" alt="Student learning"/>


    </div>

  </section>

  {/* Testimonty Section */}
  <section className="testimonials">
    <h4>TESTIMONIES</h4>
    <h2>Feedback From Our Students</h2>

    <div className="testimonial-container">
      <div className="card">
        <img src={image1} alt= "Student picture"/>
        <h3>Odocha Leonard</h3>
        <p>This Academy Completely changed my Career. I learned so well an got my first good job</p>
      </div>

      <div className="card">
        <img src={image} alt="Student pic 2"/>
        <h3> Oluchi Iwueze</h3>
        <p>This Academy Completely changed my Career. They did their best</p>
      </div>

      <div className="card">
        <img src={image3} alt="Student 3"/>
        <h3> Joseph Claret</h3>
        <p>This Academy Completely changed my Career. Awesome experience</p>
      </div>


    </div>

  </section>


  { /*Call To Action Section */}
  <section className="cta">
    <div className="cta-content">
      <h2>Ready to Start Your Learning Journey</h2>
      <p>Join Us today and start learning practical digital skills that can transform your future.</p>
      <a href="" className="cta-button">Get Started</a>
    </div>

  </section>  


  {/* FOOTER  */}
  <footer className="footer">
      <div className="footer-container">
        { /* About */}
        <div className="footer-box">
          <h2>Our Digital Skills Academy</h2>
          <p> Empowering students with practical digital <br/>  skills for a better future</p>
          </div>

       {/* Quick Links */}

          <div className="footer-box">
            <h3>Quick Links</h3>

               <a href="">Home</a>
               <a href="">About</a>
               <a href="">Courses</a>
               <a href="">Contact</a>
           
           </div>

           {/* CONTACT */}

           <div className="footer-box">
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone:  +234 800 000 0000</p>
            <p>Owerri:  Imo State</p>
           </div>
      </div>


      {/* COPYRIGHT */}
      <div className="copyright">
        <p> &copy; 2026 Our Digital Skills Academy. All Rights Reserved</p>
      </div>
      

      </footer>

      



    </div>
  )
}

export default App
