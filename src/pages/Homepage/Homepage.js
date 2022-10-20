import React from 'react'
import Hero from '../../components/Hero/Hero'
import Biography from '../../components/Biography/Biography'
import Skills from '../../components/Skills/Skills'
import Services from '../../components/Services/Services'
import Projects from '../../components/Projects/ProjectsComponent'
import Banner from '../../components/Banner/Banner'
import Testimonials from '../../components/Testimonials/TestimonialsComponent'
import Form from '../../components/MultistepForm/Form'
import Footer from '../../components/Footer/Footer'

const Homepage = () => {
  return (
  <div>
    <Hero/>
    <Biography/>
    <Skills/>
    <Services/>
    <Projects/>
    <Banner/>
    <Testimonials/>
    <Form/>
  </div>
  )
}

export default Homepage