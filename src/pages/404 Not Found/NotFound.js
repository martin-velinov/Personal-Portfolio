import React from 'react'
import './NotFound.css'
import notfound from '../../assets/img/404.jpg'
const NotFound = () => {
  return (
    <div className='not-found'>
     <h2> 404, Not Found</h2>
     <p>The page you are searching for doesn't exist.</p>
     <img src={notfound} alt="" />
     <button className='btn-primary'>Go to homepage</button>
    </div>
  )
}

export default NotFound