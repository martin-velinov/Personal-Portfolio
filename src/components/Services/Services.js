import React from 'react'
import './Services.css'
import {Link} from 'react-router-dom'

const Services = () => {
  return (
    <div className='services-wrapper'>
      <h2>My Services</h2>
      <p>Services that I offer to companies and clients</p>
      <div className="services">
        <div className="service">
        <i className="fa-solid fa-pen-ruler"></i>
          <h3>UI/UX design</h3>
          <button className='btn-secondary'><Link to="/projects">See work</Link></button>
        </div>
        <div className="service">
        <i className="fa-solid fa-laptop-code"></i>
          <h3>Front-end development</h3>
          <button className='btn-secondary'><Link to="/projects">See work</Link></button>
          
        </div>
        <div className="service">
        <i className="fa-solid fa-server"></i>
          <h3>Back-end development</h3>
          <button className='btn-secondary'><Link to="/projects">See work</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Services