import React from 'react'
import './Biography.css'

const Biography = () => {
  return (
    <div className='bio-wrapper'>
      <span>Martin Velinov</span>
      <h3>FullStack JavaScript Developer</h3>
      <p>I'm a web developer with passion for making beautiful UIs and
        taking bussinesses to the next level
      </p>
      <button className='btn-primary'>See work</button>
      <button className='btn-secondary'>Hire me</button>
    </div>
  )
}

export default Biography