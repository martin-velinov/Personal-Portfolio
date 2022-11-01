import * as React from 'react';
import {Link} from 'react-router-dom'
import './Nav.css'
import Button from '@mui/material/Button';


export default function BasicMenu() {
  
  return (
    <div className='navbar'>
      <ul>
      <li><Link to="/"><Button id="basic-button">Home</Button></Link></li>
      <li>
        <Link to="/about">
        <Button
          id="basic-button">
          About me
        </Button>
        </Link>
      </li>

      <li>
        <Link to="/projects">
        <Button
          id="basic-button">
          Projects
        </Button>
        </Link>
      </li>
      <li>
        <Link to="/blog">
        <Button
          id="basic-button">
          Blog
        </Button>
        </Link>
      </li>
      <li>
        <Link to="/resume">
            <Button
              id="basic-button">
              Resume
            </Button>
        </Link>
      </li>
      <li>
        <Link to="/contact">
            <Button
              id="basic-button">
              Contact
            </Button>
        </Link>
      </li>
      <li>
      
      </li>
      
    </ul>
      
   
    </div>
    
  );
}

