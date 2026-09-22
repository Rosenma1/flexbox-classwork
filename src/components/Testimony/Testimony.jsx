import React from 'react'
import image from '../../assets/image2.jpg'
import image1 from '../../assets/image1.jpg'
import image3 from '../../assets/image3.jpg'
import './Testimony.css'

const Testimony = () => {
  return (
    <div>
      
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

    </div>
  )
}

export default Testimony
