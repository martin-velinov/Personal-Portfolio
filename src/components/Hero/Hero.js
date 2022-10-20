import React from 'react'
import './Hero.css'
import image from '../../assets/img/hero.png'

const Hero = () => {
  return (
    <div className='hero-wrapper'>
      <div className="cta">
        <h1>I help bussiness reach their next level</h1>
        <p>Having online presence in todays age is a must, let me help you
          scale you bussiness with outstanding web app.
        </p>
        <p>I'm a web developer with passion for making beautiful UIs and
        taking bussinesses to the next level
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