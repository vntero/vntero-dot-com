import Avatar from '@mui/material/Avatar'
import * as React from 'react'
import Card from '@mui/material/Card'
import { Container, Grid, Box, Typography, Stack, CardMedia, CardContent, CardActions, Button, Chip } from '@mui/material'
import Balancer from 'react-wrap-balancer'
import { card, DemoPaper } from './Helpers'

function About() {
    return (
      <Container>
          {/* Introduction */}
          <div>
            <Stack spacing={4}>
              <Grid container spacing={2} sx={{ minHeight: { xs: 'auto', md: '60vh' }, alignItems: 'center' }}>
                
                {/* Description */}
                <Grid item xs={12} md={6} lg={6} sx={{ padding: { xs: 4, md: 0 } }}>
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

                {/* Avatar, quotes and socials */}
                <Grid item xs={12} md={6} lg={6} sx={{ padding: { xs: 4, md: 0 } }}>
                  <Stack spacing={1} sx={{ paddingY: { xs: 4, md: 0 } }}>
                    <Box sx={{ paddingX: 2 }}>
                      <Typography>
                        <Balancer>
                          <Avatar alt="Hugo Antero" src="headshot.png" sx={{ width: 80, height: 80 }} />
                          <h3>Hugo Antero</h3>
                          <Box sx={{ minWidth: 250 }}>
                            <Card variant="outlined">{card}</Card>
                          </Box><br></br>
                            <a className='margin' href="https://github.com/vntero" target="_blank" rel="noreferrer"><img alt="github" src="github.png" height={35} width={35}/></a>
                            <a className='margin' href="https://www.linkedin.com/in/vntero/" target="_blank" rel="noreferrer"><img alt="linkedin" src="linkedin.png" height={35} width={35}/></a>
                            <a className='margin' href="mailto:hi@vntero.com"><img alt="email" src="email.png" height={35} width={35}/></a>
                        </Balancer>
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>

              </Grid>
            </Stack>
          </div>

          {/* Favourite projects */}
          <div>
            <h1>Favourite projects</h1><br></br>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} sx={{ minHeight: { xs: 'auto' }, alignItems: 'center' }}>
                {/* Project 1 - PUB SUB*/}
                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ maxWidth: 500 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="pubsub.png"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Temp. monitoring app
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Publish-subscribe app leveraging the mosquitto message broker.
                      </Typography><br />
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        <Chip label="TypeScript" size="small" />
                        <Chip label="Node" size="small" />
                        <Chip label="Docker" size="small" />
                        <Chip label="Mosquitto" size="small" />
                      </Box>
                    </CardContent>

                    

                    <CardActions>
                      <Button size="small"><a href='https://github.com/vntero/temperature-monitoring-pub-sub' target="_blank" rel="noreferrer">Github</a></Button>
                    </CardActions>
                  </Card>
                </Grid>
                {/* Project 2 - BUSZINGA! */}
                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ maxWidth: 500 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="buszinga.png"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        2D racing game
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Bus driver goes on an Impossible Mission to take the kids to school.
                      </Typography><br />
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        <Chip label="HTML" size="small"/>
                        <Chip label="CSS" size="small"/>
                        <Chip label="JS DOM" size="small"/>
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button size="small"><a href='https://vntero.github.io/buszinga/' target="_blank" rel="noreferrer">Play</a></Button>
                      <Button size="small"><a href='https://github.com/vntero/buszinga' target="_blank" rel="noreferrer">Github</a></Button>
                    </CardActions>
                  </Card>
                </Grid>
                {/* Project 3 - CAFE AU LAIT */}
                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ maxWidth: 500 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="cafeaulait.png"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        cafeaulait.ch
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      "Cafe Au Lait" is a non-profit dance school based in Zurich.
                      </Typography><br />
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        <Chip label="React" size="small"/>
                        <Chip label="Node" size="small"/>
                        <Chip label="Bootstrap" size="small"/>
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button size="small"><a href='https://www.cafeaulait.ch' target="_blank" rel="noreferrer">Visit</a></Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Box>          
          </div>

          {/* Skills */}
          <div>
            <h1>Skills</h1><br></br>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                {/* Frontend */}
                <Grid xs>
                  <DemoPaper square elevation={0}>
                  <h3>Frontend</h3>
                  <div className="div-skills">
                      <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img alt="TypeScript" src="typescript.png" height={45} width={45}/></a>
                      <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img alt="React" src="react.png" height={45} width={50}/></a>
                      <a href="https://svelte.dev/" target="_blank" rel="noreferrer"><img alt="Svelte" src="svelte.png" height={55} width={45}/></a>
                  </div>
                  </DemoPaper><br></br>
                </Grid>

                {/* Backend */}
                <Grid xs>
                  <DemoPaper square elevation={0}>
                  <h3>Backend</h3>
                  <div className="div-skills">
                    <a href="https://nodejs.org/" target="_blank" rel="noreferrer"><img alt="Node" src="node.png" height={50} width={80}/></a>
                    <a href="https://jestjs.io/" target="_blank" rel="noreferrer"><img alt="Jest" src="jest.png" height={50} width={50}/></a>
                    <a href="https://go.dev" target="_blank" rel="noreferrer"><img alt="Go" src="go.png" height={35} width={85}/></a>
                  </div>
                  <div className="div-skills">
                    <a href="https://graphql.org/" target="_blank" rel="noreferrer"><img alt="AWS" src="gql.png" height={50} width={50}/></a>
                    <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img alt="MongoDB" src="mongo.png" height={70} width={60}/></a>
                    <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer"><img alt="PostgreSQL" src="pgsql.png" height={50} width={50}/></a>
                  </div><br></br>
                  </DemoPaper><br></br>
                </Grid>

                {/* Infrastructure */}
                <Grid xs>
                  <DemoPaper square elevation={0}>
                    <h3>Infrastructure</h3>
                    <div className="div-skills">
                      <a href="https://www.docker.com/" target="_blank" rel="noreferrer"><img alt="Docker" src="docker.png" height={45} width={60}/></a>
                      <a href="https://kubernetes.io/" target="_blank" rel="noreferrer"><img alt="Kubernetes" src="kubernetes.png" height={50} width={50}/></a>
                      <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer"><img alt="AWS" src="aws.png" height={40} width={60}/></a>
                    </div>
                    <div className="div-skills">
                      <a href="https://prometheus.io/" target="_blank" rel="noreferrer"><img alt="Prometheus" src="prometheus.png" height={50} width={50}/></a>
                      <a href="https://sentry.io/welcome/" target="_blank" rel="noreferrer"><img alt="Sentry" src="sentry.png" height={53} width={60}/></a>
                    </div><br></br>
                  </DemoPaper><br></br>
                </Grid>
              </Grid>
            </Box>          
          </div>
      </Container>
    )
}

export default About
