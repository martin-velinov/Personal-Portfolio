import React from 'react'
import './About.css'
import profile from '../../assets/img/profile-img.png'
import cv from '../../assets/CV.pdf'

const About = () => {
  return (
    
    <div className="about-wrapper">
      <div className='about'>
      <div>
      <h2>Hello I'm Martin Velinov</h2>
      <img src={profile} alt="profile-img" />
      </div>
      <div className='about-info'>
        <h3>About me</h3>
        <p>Result-oriented developer with wide-ranging experience in the modern technologies for the web. Organized and self-motivated developer who has drive for solving the business needs of every project
          and willingness to constantly learn new things.</p>
        <p>My skills include: HTML, CSS, Bootstrap, Sass, JavaScript, React.js, Node.js, MongoDB</p>
        <h3>Biography</h3>
        <p>Born 12.02.1994</p>
        <p>Full-stack JavaScript developer - Semos Academy 2022</p>
        <h3>Work Experience</h3>
        <p>Upwork Freelancer 2020-2022</p>
        <button className='btn-primary'><a href={cv} download >
      Download CV
    </a></button>
      </div>
      </div>


    </div>
  )
}

export default About