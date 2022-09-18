import React from 'react'
import './Hero.css'
import image from '../../assets/img/hero.jpg'

const Hero = () => {
  return (
    <div className='hero-wrapper'>
      <div className="cta">
        <h1>I help bussiness reach their next level</h1>
        <p>having online presence in todays age is a must, let me help you
          scale you bussiness with outstanding web app.
        </p>
        <button className='btn-primary'>Contact me</button>
        <button className='btn-secondary'>See work</button>
      </div>
      <div className="hero-image">
        <img src={image} alt="hero-img" />
      </div>
    </div>
  )
}

export default Hero