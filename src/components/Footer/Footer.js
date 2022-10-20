import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-wrapper ">
        <div className="footer-bottom">
            <div className="page-footer">

              <div className="footer-col" >
                <div className="footer-social">
                  <li>
                    <i className="fab fa-instagram"></i>
                  </li>
                  <li>
                    <i className='fab fa-github'></i>
                  </li>
                  
                </div>
              

                <div className="footer-a">
                    <p>martin.velinov24@hotmail.com</p>
                    <p>Skopje, Macedonia</p>
                </div>
              </div>
              <div className="footer-col">
                
                <ul>
                  <li>Home</li>
                  <li>About me</li>
                  <li>Skills</li>
                  <li>Testimonials</li>
                  <li>Contact me</li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>About me</h4>
                <ul>
                  <li>Biography</li>
                  <li>Achievements</li>
                  <li>FAQs</li>
                  <li>Affiliets</li>
                  <li>Community</li>
                </ul>
              </div>
    
              <div className="footer-col">
                <h4>Activities</h4>
                <ul>
                  <li>Charities</li>
                  <li>Events</li>
                  <li>Giveaway</li>
                  <li>Team-building</li>
                  <li>World Fair</li>
                </ul>
              </div>
            </div>
    
            <div className="ending">
              <div className="copy">
                  <p>© 2022.Martin's Portfolio All Rights Reserved.</p>
                    
                </div>
              
            </div>
          </div>
    </footer>
  )
}

export default Footer