import React from 'react'
import './About.css'
import profile from '../../assets/img/profile-img.jpg'
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
        <button className='btn-primary'><a href={cv} download >
      Download CV
    </a></button>
      </div>
      </div>


    </div>
  )
}

export default About