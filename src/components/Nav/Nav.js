import * as React from 'react';
import {Link} from 'react-router-dom'
import './Nav.css'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className='navbar'>
      <ul>
      <li><Link to="/"><Button id="basic-button">Home</Button></Link></li>
      <li>
        <Link to="/about">
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        About me
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu></Link>
      </li>

      <li>
      <Link to="/projects">
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Projects
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
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
      <li> <FormControlLabel control={<Switch  />} label="Dark Theme" /></li>
    </ul>
      
   
    </div>
    
  );
}