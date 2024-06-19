import React from "react";
import Card from "@mui/material/Card";
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
} from "@mui/material";

function Projects() {
  return (
    <Container>
      <div className="padded-bottom">
        <h1>All projects</h1>
        <br></br>
        {/* Frontend projects */}
        <Box sx={{ flexGrow: 1 }}>
          <h2>Frontend</h2>
          <br></br>
          <Grid
            container
            spacing={2}
            sx={{ minHeight: { xs: "auto" }, alignItems: "center" }}
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
                  <Typography gutterBottom variant="h5" component="div">
                    2D racing game
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Bus driver goes on an Impossible Mission to take the kids to
                    school.
                  </Typography>
                  <br />
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
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
                  <Typography gutterBottom variant="h5" component="div">
                    cafeaulait.ch
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    "Cafe Au Lait" is a non-profit dance school based in Zurich.
                  </Typography>
                  <br />
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
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
          <h2>Backend</h2>
          <br></br>
          <Grid
            container
            spacing={2}
            sx={{ minHeight: { xs: "auto" }, alignItems: "center" }}
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
                  <Typography gutterBottom variant="h5" component="div">
                    Temp. monitoring app
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Publish-subscribe app leveraging the mosquitto message
                    broker.
                  </Typography>
                  <br />
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
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
          </Grid>
        </Box>
      </div>
    </Container>
  );
}

export default Projects;
