import React from 'react'
import './Footer.css'
import logo from '../../assets/img/logo.png'
import {Link} from 'react-router-dom'
const Footer = () => {
  const github ="https://github.com/martin-velinov"
  const behance ="https://www.behance.net/martinvelinov"
  const linkedin = "https://www.linkedin.com/in/martin-velinov-796815162/"
  return (
    
    <footer className="footer-wrapper ">
        <div className="footer-bottom">
            <div className="page-footer">

              <div className="footer-col" >
                <div className="footer-a">
                <img src={logo} alt="logo" className='logo'/>
                    <div className="social">
                    
                  <li>
                    <a href={github}  target="_blank" rel="noopener noreferrer"><i className='fab fa-github'></i></a>
                  </li>
                  <li>
                 <a href={behance} target="_blank" rel="noopener noreferrer"> <i class="fa-brands fa-behance"></i></a>
                  </li>
                  <li>
                  <a href={linkedin} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                  </li>
                    </div>
                </div>
              </div>

              <div className="footer-col">
                
                <ul className='list'>
                <h4>Sitemap</h4>
                  <Link>Home</Link>
                  <Link>Skills</Link>
                  <Link>Services</Link>
                  <Link>Projects</Link>
                  <Link>Contact me</Link>
                </ul>
              </div>

              <div className="footer-col">
                <ul className='list'>
                <h4>About me</h4>
                  <Link>Biography</Link>
                  <Link>Achievements</Link>
                  <Link>Certificates</Link>
                  <Link>Work Experience</Link>
                  <Link>Interests</Link>
                </ul>
              </div>
    
              <div className="footer-col">
                
                <ul className='list'>
                <h4>Activities</h4>
                  <Link>Hackatons</Link>
                  <Link>Events</Link>
                  <Link>Giveaway</Link>
                  <Link>Team-building</Link>
                  <Link>Webinars</Link>
                </ul>
              </div>
            </div>
    
            <div className="ending">
              <div className="copy">
                  <p>© 2023 All Rights Reserved.</p>
                    
                </div>
              
            </div>
          </div>
    </footer>
  )
}

export default Footer