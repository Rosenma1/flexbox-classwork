import React from 'react'
import './ContactScreen.css'
import Rosekicon from '../../assets/rosekicons.png'
import { Link } from 'react-router-dom'


const ContactScreen = () => {
  return (
    <div>
      <section>
    <div>
      <img src={Rosekicon} alt="rosekicon"/>
    </div>
      <h2 className='h2'>Contact Us</h2>
      <div className='two-div'>
     <div className='general-inquiry'>
      <h5>General Inquiries</h5>
       <p>For questions about programs, admissions, financial aid,  requests for materials, or any other inquiries regarding attending NBCC, please complete the form below.</p>
       <h1>What can we help you <br/> with?</h1>
       <ul>
       <li><Link>I am a ROSEK student</Link></li>
       <li><Link>I have applied to study at ROSEK</Link></li>
       <li><Link>I want to know more about ROSEK Academy</Link></li>
       <li><Link>I have other questions</Link></li>
       </ul>
      </div>
       
       <div className='second-div'>
        <h3>Academy Closure dates</h3>
        <button>View Closures</button>
        <h5>Prefer to speak to someone in person?</h5>
        <p>The ROSEK recruitment team is always available via phone, email <br/> or in-person to answer any questions you may have about <br/> attending ROSEK.</p>
        <ul>
          <li><Link>Nigerian Students Resident in Imo State</Link></li>
          <li><Link>Nigerian Students Resident Outside Imo State</Link></li>
          
        </ul>
       <div className="rep">
       <span>📞</span>
        <h6>Academy Reception </h6>
         </div>
         <h5 className='h5'>+234905945671</h5>




     </div>




      </div>


      </section>



    </div>
  )
}

export default ContactScreen

