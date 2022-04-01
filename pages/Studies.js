import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Particles from 'react-tsparticles';
import { options } from '../animation/animation'


const Studies = props => {
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
  return <div>
       <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options} />
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <Typography>Hola</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            AEG   <br />
                            2021
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>;
};

export default Studies;
