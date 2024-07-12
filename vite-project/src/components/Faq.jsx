import React from 'react'
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography
  } from '@mui/material'
  import { Audio } from 'react-loader-spinner';
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
  import { useState } from 'react'
  import './Faq.css'

const Faq = () => {
    const [expanded, setExpanded] = useState(false)
    const handleChange = (isExpanded, panel) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <div className='Faq-Main'>
      <div></div>
      <div className='container Faq'>
     


 
  
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}
        className='accd'>
        <AccordionSummary
          aria-controls='panel1-content'
          id='panel1-header'
          expandIcon={<ExpandMoreIcon className='accdicon'/>}>
          <Typography className='Accdhead'>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='accdhidetext'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr />
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}
        className='accd'>
        <AccordionSummary
          aria-controls='panel2-content'
          id='panel2-header'
          expandIcon={<ExpandMoreIcon className='accdicon'/>}>
          <Typography className='Accdhead'>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='accdhidetext'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>

      </Accordion>
      <hr />
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}
        className='accd'>
        <AccordionSummary
          aria-controls='panel3-content'
          id='panel3-header'
          expandIcon={<ExpandMoreIcon className='accdicon'/>}>
          <Typography className='Accdhead'>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='accdhidetext'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr/>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel4')}
        className='accd'>
        <AccordionSummary
          aria-controls='panel4-content'
          id='panel4-header'
          expandIcon={<ExpandMoreIcon className='accdicon'/>}>
          <Typography className='Accdhead'>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='accdhidetext'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr/>
      <Accordion
        expanded={expanded === 'panel5'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel5')}
        className='accd'>
        <AccordionSummary
          aria-controls='panel5-content'
          id='panel5-header'
          expandIcon={<ExpandMoreIcon className='accdicon'/>}>
          <Typography className='Accdhead'>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='accdhidetext'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr/>
      <Accordion
        expanded={expanded === 'panel6'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel6')}
        className='accd'>
        <AccordionSummary
          aria-controls='panel6-content'
          id='panel6-header'
          expandIcon={<ExpandMoreIcon className='accdicon'/>}>
          <Typography className='Accdhead'>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='accdhidetext'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr/>
      <Accordion
        expanded={expanded === 'panel7'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel7')}
        className='accd'>
        <AccordionSummary
          aria-controls='panel7-content'
          id='panel7-header'
          expandIcon={<ExpandMoreIcon className='accdicon'/>}>
          <Typography className='Accdhead'>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='accdhidetext'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr/>
      <Accordion
        expanded={expanded === 'panel8'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel8')}
        className='accd'>
        <AccordionSummary
          aria-controls='panel8-content'
          id='panel8-header'
          expandIcon={<ExpandMoreIcon className='accdicon'/>}>
          <Typography className='Accdhead'>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='accdhidetext'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr/>
      <Accordion
        expanded={expanded === 'panel9'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel9')}
        className='accd'>
        <AccordionSummary
          aria-controls='panel9-content'
          id='panel9-header'
          expandIcon={<ExpandMoreIcon className='accdicon'/>}>
          <Typography className='Accdhead'>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='accdhidetext'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr/>
      <Accordion
        expanded={expanded === 'panel10'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel10')}
        className='accd'>
        <AccordionSummary
          aria-controls='panel10-content'
          id='panel10-header'
          expandIcon={<ExpandMoreIcon className='accdicon'/>}>
          <Typography className='Accdhead'>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='accdhidetext'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr/>
      <Accordion
        expanded={expanded === 'panel11'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel11')}
        className='accd'>
        <AccordionSummary
          aria-controls='panel11-content'
          id='panel11-header'
          style={{borderBottomColor:"red"}}
          expandIcon={<ExpandMoreIcon className='accdicon'/>}>
          <Typography className='Accdhead'>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='accdhidetext'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr/>
      <Accordion
        expanded={expanded === 'panel12'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel12')}
        className='accd'>
        <AccordionSummary
          aria-controls='panel12-content'
          id='panel12-header'
          expandIcon={<ExpandMoreIcon className='accdicon'/>}>
          <Typography className='Accdhead'>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='accdhidetext'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr/>
     
</div>
    </div>
  )
}

export default Faq
