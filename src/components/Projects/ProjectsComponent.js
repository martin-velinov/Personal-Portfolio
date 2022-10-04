import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <div className='projects-wrapper'>
      <div className="projects">
        <div className="project">
          <h4>MV Solutions</h4>
          <p>landing page for a software company</p>
          <div className='tech-stack'>
            <span>html</span>
            <span>tailwindCSS</span>
            <span>Javascript</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/martin-velinov/TailwindCSS-Landing-Page"><i class="fa-brands fa-github"></i></a>
            <a href="https://mv-solutions.netlify.app/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
        <div className="project">
          <h4>Victoria Hotels</h4>
          <p>landing page for hotel chain</p>
          <div className='tech-stack'>
            <span>html</span>
            <span>Bootstrap</span>
            <span>Javascript</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/martin-velinov/Bootstrap-Website"><i class="fa-brands fa-github"></i></a>
            <a href="https://victoria-hotels.netlify.app/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
        <div className="project">
          <h4>Vehicle Informer</h4>
          <p>Moderator for vehicles</p>
          <div className='tech-stack'>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>CSS</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/martin-velinov/VehicleInformer-NodeApi"><i class="fa-brands fa-github"></i></a>
            <a href="https://vehicleinformer.onrender.com/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
        <div className="project">
          <h4>Restaurant Landing Page</h4>
          <p>landing page for a restaurant bussiness</p>
          <div className='tech-stack'>
            <span>html</span>
            <span>Scss</span>
            <span>Javascript</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/martin-velinov/Landing-page-HTML-CSS-JS"><i class="fa-brands fa-github"></i></a>
            <a href="https://martin-velinov.github.io/Landing-page-HTML-CSS-JS/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects