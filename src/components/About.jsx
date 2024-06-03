import Avatar from '@mui/material/Avatar'
import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

function About() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <div className="div-intro">
            <Grid container wrap="nowrap" spacing={2}>
                <Grid xs={6} md={6}>
                    <h1>backend developer looking to build and collaborate on <br />
                    <span className="blue"> beautiful</span>, <span className="red">engaging</span>, and <span className="green">functional</span> projects for the world wide web.</h1>
                </Grid>
                <Grid xs={6} md={6}>
                <div>
                  <div className="div-avatar">
                    <Avatar alt="Hugo Antero" src="headshot.png" sx={{ width: 100, height: 100 }} />
                  </div>
                  <div>
                    <h2>Hugo Antero</h2>
                    <a className='margin' href="https://github.com/vntero" target="_blank" rel="noreferrer"><img alt="github" src="github.png" height={25} width={25}/></a>
                    <a className='margin' href="https://www.linkedin.com/in/vntero/" target="_blank" rel="noreferrer"><img alt="linkedin" src="linkedin.png" height={25} width={25}/></a>
                    <a className='margin' href="mailto:hi@vntero.com"><img alt="email" src="email.png" height={25} width={25}/></a>
                  </div>
                </div>
                </Grid>
            </Grid>
        </div>

        <div className="div-favourite-projects">
          <h1>favourite projects</h1>
          <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
            <Grid container wrap="nowrap" spacing={2} justifyContent="center">
              <Card sx={{ my: 1, mx: 'auto', p: 2 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="/static/images/cards/contemplative-reptile.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </CardActions>
              </Card>
              <Card sx={{ my: 1, mx: 'auto', p: 2 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="/static/images/cards/contemplative-reptile.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </CardActions>
              </Card>
              <Card sx={{ my: 1, mx: 'auto', p: 2 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="/static/images/cards/contemplative-reptile.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </CardActions>
              </Card>
            </Grid>
          </Box>
        </div>

        <div className="div-hard-skills">
          <h1>cards up my sleeve</h1>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid xs>
                frontend
                <div className="div-skills">
                    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img alt="TypeScript" src="typescript.png" height={45} width={45}/></a>
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img alt="React" src="react.png" height={45} width={50}/></a>
                    <a href="https://htmx.org/" target="_blank" rel="noreferrer"><img alt="htmx" src="htmx.png" height={45} width={150}/></a>
                </div>
              </Grid>
              <Grid xs>
                backend
                <div className="div-skills">
                    <a href="https://nodejs.org/" target="_blank" rel="noreferrer"><img alt="Node" src="node.png" height={50} width={80}/></a>
                    <a href="https://go.dev" target="_blank" rel="noreferrer"><img alt="Go" src="go.png" height={35} width={85}/></a>
                    <a href="https://graphql.org/" target="_blank" rel="noreferrer"><img alt="AWS" src="gql.png" height={50} width={50}/></a>
                    <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img alt="MongoDB" src="mongo.png" height={70} width={60}/></a>
                    <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer"><img alt="PostgreSQL" src="pgsql.png" height={50} width={50}/></a>
                    <a href="https://jestjs.io/" target="_blank" rel="noreferrer"><img alt="Jest" src="jest.png" height={50} width={50}/></a>
                </div>
              </Grid>
              <Grid xs>
                infra
                <div className="div-skills">
                    <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer"><img alt="AWS" src="aws.png" height={40} width={60}/></a>
                    <a href="https://www.docker.com/" target="_blank" rel="noreferrer"><img alt="Docker" src="docker.png" height={45} width={60}/></a>
                    <a href="https://kubernetes.io/" target="_blank" rel="noreferrer"><img alt="Kubernetes" src="kubernetes.png" height={50} width={50}/></a>
                    <a href="https://sentry.io/welcome/" target="_blank" rel="noreferrer"><img alt="Sentry" src="sentry.png" height={53} width={60}/></a>
                    <a href="https://prometheus.io/" target="_blank" rel="noreferrer"><img alt="Prometheus" src="prometheus.png" height={50} width={50}/></a>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Box>
    )
}

export default About
