import React from 'react'
import Card from '@mui/material/Card'
import {
  Container,
  Grid,
  Box,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
} from '@mui/material'

function Projects() {
  return (
    <Container>
      <div className="padded-bottom">
        <br></br>
        <Typography gutterBottom variant="h3" component="div">
          All projects
        </Typography>
        <br></br>
        <br></br>
        {/* Frontend projects */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h4" component="div">
            Frontend
          </Typography>
          <br></br>
          <Grid
            container
            spacing={2}
            sx={{ minHeight: { xs: 'auto' }, alignItems: 'center' }}
          >
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
                    "Cafe Au Lait" is a non-profit dance school based in Zurich.
                  </Typography>
                  <br />
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    <Chip label="React" size="small" />
                    <Chip label="Node" size="small" />
                    <Chip label="Bootstrap" size="small" />
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
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Backend projects */}
        <Box sx={{ flexGrow: 1 }}>
          <br></br>
          <br></br>
          <br></br>
          <Typography gutterBottom variant="h4" component="div">
            Backend
          </Typography>
          <br></br>
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
                  alt="Temperature "
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

            {/* Project 2 - QR code generator*/}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                  component="img"
                  alt="QR code generator"
                  height="140"
                  image="qrcodegenerator.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    QR code generator
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Enter a valid url and receive back a QR code.
                  </Typography>
                  <br />
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    <Chip label="JavaScript" size="small" />
                    <Chip label="Node" size="small" />
                  </Box>
                </CardContent>

                <CardActions>
                  <Button size="small">
                    <a
                      href="https://github.com/vntero/qr-code-generator"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Project 3 - car dealer cli application*/}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                  component="img"
                  alt="Car dealer CLI"
                  height="140"
                  image="cardealercli.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Car dealer CLI
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A small command line app that reads data from a csv file to
                    return a computed feedback.
                  </Typography>
                  <br />
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    <Chip label="JavaScript" size="small" />
                    <Chip label="Node" size="small" />
                    <Chip label="Commander" size="small" />
                  </Box>
                </CardContent>

                <CardActions>
                  <Button size="small">
                    <a
                      href="https://github.com/vntero/car-dealer-cli"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Project 4 - Server written in Go to handle form submissions*/}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                  component="img"
                  alt="Car dealer CLI"
                  height="140"
                  image="formHandlerGo.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Forms handler server
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A server written in Go that receives form submissions,
                    renders it to HTML, and sends it via email.
                  </Typography>
                  <br />
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    <Chip label="Go" size="small" />
                    <Chip label="Docker" size="small" />
                    <Chip label="AWS" size="small" />
                    <Chip label="Github Actions" size="small" />
                    <Chip label="CI/CD" size="small" />
                  </Box>
                </CardContent>

                <CardActions>
                  <Button size="small">
                    <a
                      href="https://github.com/vntero/cafeaulait-server"
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
    </Container>
  )
}

export default Projects
