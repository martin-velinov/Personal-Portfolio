import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
const Nav = () => {
  return (
    
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  )
}

export default Nav