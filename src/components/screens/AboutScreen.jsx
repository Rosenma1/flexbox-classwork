import React from 'react'
import './AboutScreen.css'
import { Link } from 'react-router-dom'

const AboutScreen = () => {
  return (
    <div>
      <section className='Aboutheader'>
        <div className='aboutscreen'>
        <h1>Train Hard. Skill Up.</h1>
        <p>Never Give Up, Keep Pushing.</p>
        <button>Become a Member</button>
        <button>Sign up here</button>
        </div>
      </section>
      <section className='border'>
        <h1>The Rosek Academy Way</h1>
        <h2>What We Do</h2>
         <p>At our academy, we deliver practical, industry driven training designed to close the gap between theoretical knowledge and real world employment. We don't just teach concepts, we build careers with
      Industry aligned curriculums.</p>
     <div><p>We design our courses in collaboration with industry experts to ensure you learn the exact tools, frameworks, and skills employers are looking for right now.
      hands on, ProjectBased Learning, Our students learn by doing.</p></div> 
      <div><p>Through real world case studies and practical projects, you build a professional portfolio that proves your capabilities.
      Expert Mentorship, we connect learners with experienced professionals who provide direct guidance, feedback, and insider industry insights.
      Career Support & Networking, Beyond technical training, we offer resume building, interview preparation, and direct access to a community of hiring partners and peers.</p></div>

      </section>

      <section className='Ourmission'>
        <h2>Our Mission</h2>
        <p>To empower ambitious individuals with the high demand skills, practical expertise, and industry networks needed to thrive in a rapidly evolving job market. We bridge the gap between traditional education and modern career demands, transforming passionate learners into highly employable professionals. We strive to accelerate professional growth by delivering practical, industry led skills training that prepares the workforce of today for the opportunities of tomorrow. </p>
       
        </section>
        <section className='Ourvision'>
        <h3>Our Vision</h3>
        <p>To be the premier global launchpad for career transformation, where anyone, anywhere, can acquire the expertise needed to shape the future of industry and achieve their full professional potential.To cultivate a thriving ecosystem of digital pioneers, innovators, and leaders who will drive the evolution of the global digital economy.</p>

      </section>

      <section className='courseslink'>
        <h4>To view Courses offered in Rosek Academy</h4>
        <h5>please click the link below &#9660;</h5>
        <div className='linkcourses'><Link to ='/CoursesScreen'>Courses available</Link></div>

      </section>

        



    </div>
  )
}

export default AboutScreen

