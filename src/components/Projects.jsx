import React from "react"
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';

// import { autoPlay } from 'react-swipeable-views-utils';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
{
    label: 'cafeaulait.ch',
    imgPath:
        'cafeaulait.png',
        open: <Button sx={{textTransform: 'lowercase' }}><a href="https://cafeaulait.ch" target="_blank" rel="noreferrer">Open in a new tab</a></Button>,
        source: <Button sx={{textTransform: 'lowercase' }}><a href="https://github.com/vntero" target="_blank" rel="noreferrer">View source code</a></Button>,
        description: <p>"Cafe Au Lait" is a non-profit dance school based in Zurich. I was approached by the organisation to redesign and manage their website.</p>
    },
  {
    label: 'Buszinga!',
    imgPath: 'buszinga.png',
    open: <Button sx={{textTransform: 'lowercase' }}><a href="https://vntero.github.io/buszinga/" target="_blank" rel="noreferrer">Open in a new tab</a></Button>,
    source: <Button sx={{textTransform: 'lowercase' }}><a href="https://github.com/vntero/buszinga" target="_blank" rel="noreferrer">View source code</a></Button>,
    description: <p>A racing game built on HTML Canvas with vanilla JavaScript with a special focus on collision detection. </p>
  },
  {
    label: 'WoD[i]-WoDpicker',
    imgPath: 'wodi.png',
    open: <Button sx={{textTransform: 'lowercase' }}><a href="https://wodi-wodpicker.herokuapp.com/" target="_blank" rel="noreferrer">Open in a new tab</a></Button>,
    source: <Button sx={{textTransform: 'lowercase' }}><a href="https://github.com/marvinvalke/wodi-wod-picker" target="_blank" rel="noreferrer">View source code</a></Button>,
    description: <p>A word play between Woody Woodpecker (the cartoon) and Workout of the day. In this platform (built with a friend) you can create personalised workouts with more than 1,300 exercises to choose from.</p>
  },
  {
    label: 'Clique',
    imgPath: 'clique.png',
    open: <Button sx={{textTransform: 'lowercase' }}><a href="https://clique-dot-io.herokuapp.com" target="_blank" rel="noreferrer">Open in a new tab</a></Button>,
    source: <Button sx={{textTransform: 'lowercase' }}><a href="https://github.com/vntero/clique-client" target="_blank" rel="noreferrer">View source code</a></Button>,
    description: <p>"Clique" is a web app focused on the social aspect of competitive activities. Register yourself to find, join and /or create sport Groups and Events based on your location.</p>
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

            <div className="div-carousel">
                <Box sx={{ maxWidth: 800, flexGrow: 1 }}>
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
                                maxHeight: 400,
                                display: 'block',
                                maxWidth: 800,
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
                    {images[activeStep].description}
                    <Paper
                        square
                        elevation={0}
                        sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        pl: 2,
                        bgcolor: 'background.default',
                        }}
                    >
    
                    </Paper>

                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        elevation={0}
                        nextButton={
                        <Button
                            sx={{textTransform: 'lowercase' }}
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
                            sx={{textTransform: 'lowercase' }}
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
