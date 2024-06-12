import Avatar from '@mui/material/Avatar'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles';
import { Container, Grid, Box, Typography, Stack, CardActions, Button, Paper } from '@mui/material'
import Balancer from 'react-wrap-balancer'

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        "We must cultivate our garden"
      </Typography>
    </CardContent>
    <CardActions>
      <Button size='small'>Quotate</Button>
    </CardActions>
  </React.Fragment>
)

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 320,
  height: 320,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  elevation: 0,
}));

function About() {
    return (
      <Container>
          {/* Introduction */}
          <Stack spacing={4}>
            <Grid container spacing={2} sx={{ minHeight: { xs: 'auto', md: '80vh' }, alignItems: 'center' }}>
              
              <Grid item xs={12} md={8} lg={6} sx={{ padding: { xs: 4, md: 0 } }}>
                <Stack spacing={1} sx={{ paddingY: { xs: 4, md: 0 } }}>
                  <Box sx={{ paddingX: 2 }}>
                      <Balancer>
                        <h1 className='h1-no-margin'>
                          I'm a backend developer looking to build and collaborate on
                          <span className="blue"> beautiful</span>, 
                          <span className="red"> engaging</span>, and 
                          <span className="green"> functional</span> projects for the world wide web.
                        </h1>
                      </Balancer>
                  </Box>
                </Stack>
              </Grid>

              <Grid item xs={12} md={8} lg={6} sx={{ padding: { xs: 4, md: 0 } }}>
                <Stack spacing={1} sx={{ paddingY: { xs: 4, md: 0 } }}>
                  <Box sx={{ paddingX: 2 }}>
                    <Typography>
                      <Balancer>
                        <Avatar alt="Hugo Antero" src="headshot.png" sx={{ width: 80, height: 80 }} />
                        <h3>Hugo Antero</h3>
                        <Box sx={{ minWidth: 250 }}>
                          <Card variant="outlined">{card}</Card>
                        </Box><br></br>
                        <a className='margin' href="https://github.com/vntero" target="_blank" rel="noreferrer"><img alt="github" src="github.png" height={25} width={25}/></a>
                        <a className='margin' href="https://www.linkedin.com/in/vntero/" target="_blank" rel="noreferrer"><img alt="linkedin" src="linkedin.png" height={25} width={25}/></a>
                        <a className='margin' href="mailto:hi@vntero.com"><img alt="email" src="email.png" height={25} width={25}/></a>
                      </Balancer>
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Stack>

          {/* Favourite projects */}
          <div className="div-hard-skills">
            <h1>Favourite projects</h1><br></br>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3} sx={{ minHeight: { xs: 'auto' }, alignItems: 'center' }}>
                <Grid xs>
                  <DemoPaper square>
                    <h3>Node.js pub-sub</h3>
                  </DemoPaper><br></br>
                </Grid>
                <Grid xs>
                  <DemoPaper square><h3>JavaScript 2D racing game</h3></DemoPaper><br></br>
                </Grid>
                <Grid xs>
                  <DemoPaper square><h3>cafeaulait.ch</h3></DemoPaper><br></br>
                </Grid>
              </Grid>
            </Box>          
          </div>

          {/* Skills */}
          <div className="div-hard-skills">
            <h1>Skills</h1><br></br>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                <Grid xs>
                  <DemoPaper square elevation={0}>
                  <h3>Frontend</h3>
                <div className="div-skills">
                    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img alt="TypeScript" src="typescript.png" height={45} width={45}/></a>
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img alt="React" src="react.png" height={45} width={50}/></a>
                </div>
                  </DemoPaper><br></br>
                </Grid>
                <Grid xs>
                  <DemoPaper square elevation={0}>
                  <h3>Backend</h3>
                  <div className="div-skills">
                    <a href="https://nodejs.org/" target="_blank" rel="noreferrer"><img alt="Node" src="node.png" height={50} width={80}/></a>
                    <a href="https://go.dev" target="_blank" rel="noreferrer"><img alt="Go" src="go.png" height={35} width={85}/></a>
                </div>
                  </DemoPaper><br></br>
                </Grid>
                <Grid xs>
                  <DemoPaper square elevation={0}>
                    <h3>Infrastructure</h3>
                    <div className="div-skills">
                      <a href="https://www.docker.com/" target="_blank" rel="noreferrer"><img alt="Docker" src="docker.png" height={45} width={60}/></a>
                      <a href="https://kubernetes.io/" target="_blank" rel="noreferrer"><img alt="Kubernetes" src="kubernetes.png" height={50} width={50}/></a>
                    </div>
                  </DemoPaper><br></br>
                </Grid>
              </Grid>
            </Box>          
          </div>
      </Container>
    )
}

export default About
