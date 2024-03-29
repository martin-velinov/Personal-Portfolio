import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image, live, source, title, stack} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        
         <h3>{title}</h3>
         <Box className="project-img"component={'img'} src={image} alt={'mockup'}/>
         <p>{stack}</p>
         <Box className={'portfolio'} display={'flex'} flexDirection={'row'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1rem'} py={'2rem'}>
            <Box p={1} border={'1px solid black'} borderRadius={'5px'}>
               <IconLink link={live} title={'Live Demo'} icon={'fa fa-rocket'}/>
            </Box>
            <Box p={1} border={'1px solid black'} borderRadius={'5px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;