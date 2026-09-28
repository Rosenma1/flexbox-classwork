import React from 'react'
import Rosekicon from '../../assets/rosekicons.png'
import './CoursesScreen.css'

const CoursesScreen = () => {
  const users = [
    { id: 1, program: 'Fullstack', campus: 'Worldbank', duration: '2 years' },
    { id: 2,  program: 'Cybersecurity', campus: 'Orji', duration: '3 years' },
    { id: 3,  program: 'Digital Marketing',  campus: 'Wethral', duration: '2 years' },
  ];
  const parts =[
    { id: 1, program: 'UI/UX design', campus: 'Worldbank', duration: '6 months' },
    { id: 2,  program: 'Desktop publishing', campus: 'Orji', duration: '2 months' },
    { id: 3,  program: 'Graphic design',  campus: 'Wethral', duration: '4 months' },
  ]
  const posts =[
    { id: 1, program: 'Drone Technology', campus: 'Worldbank', duration: '4 years' },
    { id: 2,  program: 'Master Video editing', campus: 'Orji', duration: '4 years' },
    { id: 3,  program: 'Python development',  campus: 'Wethral', duration: '6 years' },
  ]

  return (
    <div>
    <section className='coursesscreen-header'>
      <div className='nav-container'>
        <img src={Rosekicon} alt="rosekicon"/>
         <ul className='dropdown-menu'>Full-Time Courses</ul>
         <ul className='dropdown-menu'>Part-Time Courses</ul>
         <ul className='dropdown-menu'>Post-Grad Courses</ul>
         </div>
        </section>
        
        <section></section>

        {/* FULLTIME */}
        <section className='tablesection1'>
      <div>
        <h2>Full-Time Courses</h2>
        <table >
        <thead>
          <tr>
            <th>Program</th>
            <th>Campus</th>
            <th>Duration</th>
            
          </tr>
        </thead>
        <tbody>
         
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{user.program}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{user.campus}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{user.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </section>

    {/* PART TIME */}
        <section className='tablesection1'>
      <div>
        <h2>Part-Time Courses</h2>
        <table >
        <thead>
          <tr>
            <th>Program</th>
            <th>Campus</th>
            <th>Duration</th>
            
          </tr>
        </thead>
        <tbody>
         
          {parts.map((part) => (
            <tr key={part.id}>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{part.program}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{part.campus}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{part.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </section>

    {/* POSTGRAD */}
        <section className='tablesection1'>
      <div>
        <h2>Post-Grad Courses</h2>
        <table >
        <thead>
          <tr>
            <th>Program</th>
            <th>Campus</th>
            <th>Duration</th>
            
          </tr>
        </thead>
        <tbody>
         
          {posts.map((post) => (
            <tr key={post.id}>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{post.program}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{post.campus}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{post.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </section>

    </div>
  )
}

export default CoursesScreen

