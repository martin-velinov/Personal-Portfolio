import React from 'react'
import './Banner.css'
import cv from '../../assets/CV.pdf'
const Banner = () => {
  return (
    <div className='banner'>
      <p>Download my Resume/CV</p>
      <button className="btn-primary">
      <a href={cv} download >
      Download 
    </a>
</button>
    </div>
  )
}

export default Banner