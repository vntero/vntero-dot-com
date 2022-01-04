import React from "react"
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { Link } from "react-router-dom";
// import { autoPlay } from 'react-swipeable-views-utils';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Buszinga!',
    imgPath: 'buszinga.png',
    open: <a href="https://vntero.github.io/buszinga/" target="_blank" rel="noreferrer">Open in a new tab</a>,
    source: <a href="https://github.com/vntero/buszinga" target="_blank" rel="noreferrer">View source code on github</a>,
  },
  {
    label: 'WoD[i]-WoDpicker',
    imgPath: 'wodi.png',
    open: <a href="https://wodi-wodpicker.herokuapp.com/" target="_blank" rel="noreferrer">Open in a new tab</a>,
    source: <a href="https://github.com/marvinvalke/wodi-wod-picker" target="_blank" rel="noreferrer">View source code</a>,
  },
  {
    label: 'Clique',
    imgPath: 'clique.png',
    open: <a href="https://google.com" target="_blank" rel="noreferrer">Open in a new tab</a>,
    source: <a href="https://github.com/vntero/clique-client" target="_blank" rel="noreferrer">View source code</a>,
  },
  {
    label: 'cafeaulait.ch',
    imgPath:
      'cafeaulait.png',
      open: <a href="https:cafeaulait.ch" target="_blank" rel="noreferrer">Open in a new tab</a>,
      source: <a href="https://github.com/vntero" target="_blank" rel="noreferrer">View source code</a>,
  }
];

function Projects() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (

        <div className="div-body">

            <h1>
                Always aiming for a <span className="grey">minimalist</span>  <br />
                yet <span className="yellow">personalised</span> end-product.
            </h1>

            <div className="div-carousel">
                <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
                    <Paper
                        square
                        elevation={3}
                        sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        height: 50,
                        pl: 2,
                        bgcolor: 'background.default',
                        }}
                    >
                        <h4><i>{images[activeStep].label}</i></h4>
                        {images[activeStep].open}
                        {images[activeStep].source}
                        
                        
                        
                        
                    </Paper>
                    
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {images.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                height: 275,
                                display: 'block',
                                maxWidth: 600,
                                overflow: 'hidden',
                                width: '100%',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                            ) : null}
                        </div>
                        ))}
                    </SwipeableViews>

                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Next
                            {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                            ) : (
                            <KeyboardArrowRight />
                            )}
                        </Button>
                        }
                        backButton={
                        <Button 
                            size="small" 
                            onClick={handleBack} 
                            disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                            ) : (
                            <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                        }
                        
                    />
                    </Box>
            </div>
    </div>
    )
}

export default Projects
