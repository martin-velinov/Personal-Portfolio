import React from 'react'
import './Hero.css'
import image from '../../assets/img/hero.png'
import {info} from '../../data/info'
import {Link} from 'react-router-dom'

const Hero = (props) => {
  return (
    <div className='hero-wrapper'>
      <div className="cta">
        <h1>{info.miniBio.title}</h1>
        <p>{info.miniBio.p1}
        </p>
        <p>{info.miniBio.p2}
      </p>
        <button className='btn-primary'><Link to="/contact">Contact me</Link></button>
        <button className='btn-secondary'><Link to="/projects">See work</Link></button>
      </div>
      <div className="hero-image">
        <img src={image} alt="hero-img" />
      </div>
    </div>
  )
}

export default Hero