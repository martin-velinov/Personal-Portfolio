import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer class="footer-wrapper reveal">
        <div class="footer-bottom">
            <div class="page-footer">
              <div class="footer-col" >
                <img class="logo" src="img/logo.png" alt="" />
                <div class="footer-social">
                  <li>
                    <i class="fab fa-facebook-f"></i>
                  </li>
                  <li>
                    <i class="fab fa-twitter"></i>
                  </li>
                  <li>
                    <i class="fab fa-instagram"></i>
                  </li>
                  <li>
                    <i class="fab fa-youtube"></i>
                  </li>
                  
                </div>
                <div class="footer-a">
                    <p>+355 123-356 02</p>
                    <p>2880 Broadway, New York</p>
                </div>
              </div>
              <div class="footer-col">
                
                <ul>
                  <li>Home</li>
                  <li>About me</li>
                  <li>Skills</li>
                  <li>Testimonials</li>
                  <li>Contact me</li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>About me</h4>
                <ul>
                  <li>Biography</li>
                  <li>Achievements</li>
                  <li>FAQs</li>
                  <li>Affiliets</li>
                  <li>Community</li>
                </ul>
              </div>
    
              <div class="footer-col">
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
    
            <div class="ending">
              <div class="copy">
                  <p>© 2022.Martin's Portfolio All Rights Reserved.</p>
                    
                </div>
              <div class="links">
                <p>Terms of service</p>
                <p>Privacy policy</p>
                <p>Security</p>
              </div>
            </div>
          </div>
    </footer>
  )
}

export default Footer