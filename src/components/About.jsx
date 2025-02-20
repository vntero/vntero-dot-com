import Avatar from '@mui/material/Avatar'
import React, { useState } from 'react'
import Card from '@mui/material/Card'
import {
  Container,
  Grid,
  Box,
  Typography,
  Stack,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
} from '@mui/material'
import Balancer from 'react-wrap-balancer'
import { quotes, DemoPaper } from './Helpers'

function About() {
  const [quoteIndex, setQuoteIndex] = useState(0)

  const handleQuotateClick = () => {
    let newIndex

    do {
      newIndex = Math.floor(Math.random() * quotes.length)
    } while (newIndex === quoteIndex)
    setQuoteIndex(newIndex)
  }

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {quotes[quoteIndex]}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleQuotateClick}>
          Quotate
        </Button>
      </CardActions>
    </React.Fragment>
  )

  return (
    <Container>
      {/* Introduction */}
      <div>
        <Stack spacing={4}>
          <Grid
            container
            spacing={2}
            sx={{ minHeight: { xs: 'auto', md: '60vh' }, alignItems: 'center' }}
          >
            {/* Description */}
            <Grid item xs={12} md={6} lg={6} sx={{ padding: { xs: 4, md: 0 } }}>
              <Stack spacing={1} sx={{ paddingY: { xs: 4, md: 0 } }}>
                <Box sx={{ paddingX: 2 }}>
                  <Balancer>
                    <h1 className="h1-no-margin">
                      I'm a software developer looking to build and collaborate
                      on
                      <span className="blue"> beautiful</span>,
                      <span className="red"> engaging</span>, and
                      <span className="green"> functional</span> projects for
                      the world wide web.
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
                      <Avatar
                        alt="Hugo Antero"
                        src="headshot.png"
                        sx={{ width: 80, height: 80 }}
                      />
                      <h3>Hugo Antero</h3>
                      <Box sx={{ minWidth: 250 }}>
                        <Card variant="outlined">{card}</Card>
                      </Box>
                      <br></br>
                      <a
                        className="margin"
                        href="https://github.com/vntero"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          alt="github"
                          src="github1.png"
                          height={35}
                          width={35}
                        />
                      </a>
                      <a
                        className="margin"
                        href="https://www.linkedin.com/in/vntero/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          alt="linkedin"
                          src="linkedin1.png"
                          height={35}
                          width={35}
                        />
                      </a>
                      <a className="margin" href="mailto:hi@vntero.com">
                        <img
                          alt="email"
                          src="email1.png"
                          height={35}
                          width={35}
                        />
                      </a>
                    </Balancer>
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </div>

      {/* Favourite projects */}
      <div className="padded-bottom">
        <Typography gutterBottom variant="h3" component="div">
          Favourite projects
        </Typography>
        <br></br>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            sx={{ minHeight: { xs: 'auto' }, alignItems: 'center' }}
          >
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
                  <Typography gutterBottom variant="h6" component="div">
                    Temp. monitoring app
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Publish-subscribe app leveraging the mosquitto message
                    broker.
                  </Typography>
                  <br />
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    <Chip label="TypeScript" size="small" />
                    <Chip label="Node" size="small" />
                    <Chip label="Docker" size="small" />
                    <Chip label="Mosquitto" size="small" />
                  </Box>
                </CardContent>

                <CardActions>
                  <Button size="small">
                    <a
                      href="https://github.com/vntero/temperature-monitoring-pub-sub"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </Button>
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
                  <Typography gutterBottom variant="h6" component="div">
                    2D racing game
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Bus driver goes on an Impossible Mission to take the kids to
                    school.
                  </Typography>
                  <br />
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    <Chip label="HTML" size="small" />
                    <Chip label="CSS" size="small" />
                    <Chip label="JS DOM" size="small" />
                  </Box>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <a
                      href="https://vntero.github.io/buszinga/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Play
                    </a>
                  </Button>
                  <Button size="small">
                    <a
                      href="https://github.com/vntero/buszinga"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </Button>
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
                  <Typography gutterBottom variant="h6" component="div">
                    cafeaulait.ch
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    African dance school in Zurich.
                  </Typography>
                  <br />
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    <Chip label="Svelte" size="small" />
                    <Chip label="Tailwind" size="small" />
                    <Chip label="Netlify" size="small" />
                    <Chip label="Go" size="small" />
                    <Chip label="AWS" size="small" />
                  </Box>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <a
                      href="https://www.cafeaulait.ch"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit
                    </a>
                  </Button>
                  <Button size="small">
                    <a
                      href="https://github.com/vntero/cafeaulait"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </div>

      {/* Skills */}
      <div className="padded-bottom">
        <Typography gutterBottom variant="h3" component="div">
          Skills
        </Typography>
        <br></br>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            {/* Frontend */}
            <Grid xs>
              <DemoPaper square elevation={0}>
                <h3>Frontend</h3>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  <Chip
                    avatar={<Avatar src="react1.png"></Avatar>}
                    label="React"
                  />
                  <Chip
                    avatar={<Avatar src="svelte1.png"></Avatar>}
                    label="Svelte"
                  />
                  <Chip
                    avatar={<Avatar src="tailwind.png"></Avatar>}
                    label="Tailwind CSS"
                  />
                  <Chip
                    avatar={<Avatar src="vite.png"></Avatar>}
                    label="Vite"
                  />
                  <Chip
                    avatar={<Avatar src="mui.png"></Avatar>}
                    label="Material UI"
                  />
                </Box>
              </DemoPaper>
              <br></br>
            </Grid>

            {/* Backend */}
            <Grid xs>
              <DemoPaper square elevation={0}>
                <h3>Backend</h3>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  <Chip avatar={<Avatar src="go1.png"></Avatar>} label="Go" />
                  <Chip
                    avatar={<Avatar src="node1.png"></Avatar>}
                    label="Node.js"
                  />
                  <Chip
                    avatar={<Avatar src="typescript1.png"></Avatar>}
                    label="TypeScript"
                  />
                  <Chip
                    avatar={<Avatar src="jest1.png"></Avatar>}
                    label="Jest"
                  />
                  <Chip
                    avatar={<Avatar src="gql.png"></Avatar>}
                    label="GraphQL"
                  />
                  <Chip
                    avatar={<Avatar src="rest.png"></Avatar>}
                    label="REST"
                  />
                  <Chip
                    avatar={<Avatar src="mongo.png"></Avatar>}
                    label="MongoDB"
                  />
                  <Chip
                    avatar={<Avatar src="pgsql.png"></Avatar>}
                    label="PostreSQL"
                  />
                  <Chip
                    avatar={<Avatar src="serverless.png"></Avatar>}
                    label="Serverless"
                  />
                  <Chip
                    avatar={<Avatar src="rabbit.png"></Avatar>}
                    label="RabbitMQ"
                  />
                  <Chip
                    avatar={<Avatar src="sequelize.png"></Avatar>}
                    label="Sequelize"
                  />
                  <Chip
                    avatar={<Avatar src="mongoose.png"></Avatar>}
                    label="Mongoose"
                  />
                </Box>
              </DemoPaper>
              <br></br>
            </Grid>

            {/* Infrastructure */}
            <Grid xs>
              <DemoPaper square elevation={0}>
                <h3>Infrastructure</h3>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  <Chip
                    avatar={<Avatar src="docker.png"></Avatar>}
                    label="Docker"
                  />
                  <Chip
                    avatar={<Avatar src="kubernetes.png"></Avatar>}
                    label="Kubernetes"
                  />
                  <Chip avatar={<Avatar src="aws1.png"></Avatar>} label="AWS" />
                  <Chip
                    avatar={<Avatar src="prometheus.png"></Avatar>}
                    label="Prometheus"
                  />
                  <Chip
                    avatar={<Avatar src="sentry.png"></Avatar>}
                    label="Sentry"
                  />
                  <Chip
                    avatar={<Avatar src="github1.png"></Avatar>}
                    label="Github"
                  />
                  <Chip
                    avatar={<Avatar src="bitbucket.png"></Avatar>}
                    label="Bitbucket"
                  />
                </Box>
              </DemoPaper>
              <br></br>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Container>
  )
}

export default About
