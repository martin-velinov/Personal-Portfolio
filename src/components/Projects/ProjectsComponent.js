import React from 'react'
import PortfolioBlock from "./PortfolioBlock";
import './Projects.css'
import {info} from '../../data/info'
import {Box,} from "@mui/material";


const Projects = () => {
  return (
    <>
    <h2>My Projects</h2>
    <p>My personal projects built in the last year</p>
    <Box>
    <div className='projects'>
        {info.portfolio.map((project, index) => (
           <div >
               <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} stack={project.stack} />
           </div>
        ))}
    </div>
    </Box>
    </>
  )
}

export default Projects