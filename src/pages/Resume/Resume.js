import React from 'react';
import './Resume.css'
import cv from '../../assets/CV.pdf'

const Resume = () => {

  return (
    <div className='resume'>
     <object data={cv} type="application/pdf" width="70%" height="700px">

  </object>
    </div>
  );
}

export default Resume



