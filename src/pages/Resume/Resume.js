import React from 'react';
import cv from '../../assets/CV.pdf'

const Resume = () => {

  return (
    <div>
     <object data={cv} type="application/pdf" width="100%" height="700px">

  </object>
    </div>
  );
}

export default Resume



