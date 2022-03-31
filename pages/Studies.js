import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default class Studies extends React.Component {
    render() {
        return (
            <div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Hola</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            AEG   <br />
                            2021
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        )
    }
}
