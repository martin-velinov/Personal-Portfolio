import React from 'react'
import './About.css'
import profile from '../../assets/img/profile-img.png'

const About = () => {
  return (
    
    <div className="about-wrapper">
      <div className='about'>
      <div>
      <h2>Hello I'm Martin Velinov</h2>
      <img src={profile} alt="profile-img" />
      </div>
      <div className='about-info'>
        <p>Result-oriented developer with wide-ranging experience in the modern technologies for the web. Organized and self-motivated developer who has drive for solving the business needs of every project
          and willingness to constantly learn new things.</p>
        <p>My skills include: HTML, CSS, Bootstrap, Sass, JavaScript, React.js, Node.js, MongoDB</p>
      </div>
      </div>

      <h2>Biography</h2>
      <p>Born 12.02.1994</p>
      <p>Full-stack JavaScript developer - Semos Academy 2022</p>
      <h2>Work Experience</h2>
      <p>Upwork Freelancer 2020-2022</p>

      <button className='btn-primary'>Download CV</button>
    </div>
  )
}

export default About