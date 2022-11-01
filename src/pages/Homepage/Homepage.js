import React from 'react'
import Hero from '../../components/Hero/Hero'
import Skills from '../../components/Skills/Skills'
import Services from '../../components/Services/Services'
import Projects from '../../components/Projects/ProjectsComponent'
import Banner from '../../components/Banner/Banner'
import Form from '../../components/MultistepForm/Form'


const Homepage = () => {
  return (
  <div>
    <Hero/>
    <Skills/>
    <Services/>
    <Projects/>
    <Banner/>
    <Form/>
  </div>
  )
}

export default Homepage