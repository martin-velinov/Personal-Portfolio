import React from 'react'
import './Footer.css'
import logo from '../../assets/img/logo.png'

const Footer = () => {
  const insta= "https://www.instagram.com/m.velinov/"
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
                  <li>Home</li>
                  <li>Skills</li>
                  <li>Services</li>
                  <li>Projects</li>
                  <li>Contact me</li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>About me</h4>
                <ul className='list'>
                  <li>Biography</li>
                  <li>Achievements</li>
                  <li>Certificates</li>
                  <li>Work Experience</li>
                  <li>Interests</li>
                </ul>
              </div>
    
              <div className="footer-col">
                
                <ul className='list'>
                <h4>Activities</h4>
                  <li>Hackatons</li>
                  <li>Events</li>
                  <li>Giveaway</li>
                  <li>Team-building</li>
                  <li>Webinars</li>
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