import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className='services-wrapper'>
      <h2>My Services</h2>
      <div className="services">
        <div className="service">
          <h3>UI/UX design</h3>
        </div>
        <div className="service">
          <h3>Front-end development</h3>
        </div>
        <div className="service">
          <h3>Back-end development</h3>
        </div>
      </div>
    </div>
  )
}

export default Services