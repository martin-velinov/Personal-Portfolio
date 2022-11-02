import React from 'react'
import PortfolioBlock from "./PortfolioBlock";
import './Projects.css'
import {info} from '../../data/info'
import {Box, Grid} from "@mui/material";


const Projects = () => {
  return (
    <>
    <h1>My Projects</h1>
    <p>My personal projects built in the last year</p>
    <Box>
    <Grid container display={'flex'} justifyContent={'center'}>
        {info.portfolio.map((project, index) => (
           <Grid item xs={12} md={6} key={index}>
               <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} stack={project.stack} />
           </Grid>
        ))}
    </Grid>
    </Box>
    </>
  )
}

export default Projects