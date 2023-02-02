import React from 'react'
import Hero from '../../components/Hero/Hero'
import Skills from '../../components/Skills/Skills'
import Services from '../../components/Services/Services'
import Projects from '../../components/Projects/ProjectsComponent'
import Banner from '../../components/Banner/Banner'


const Homepage = () => {
  return (
  <div>
    <Hero/>
    <Skills/>
    <Services/>
    <Projects/>
    <Banner/>
  </div>
  )
}

export default Homepage