import Avatar from '@mui/material/Avatar'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Container, Grid, Box, Typography, Stack, CardActions, Button } from '@mui/material'
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

function About() {
    return (
      <Container>
        <Grid
					as="section"
					columns={{ '@bp1': 2, '@bp2': 3 }}
					css={{ '@bp1': { minHeight: '80vh' }, alignItems: 'center', gap: '$min' }}
				>
      <Stack spacing={4}>
        <Grid container spacing={2} sx={{ minHeight: { xs: 'auto', md: '80vh' }, alignItems: 'center' }}>
          {/* Introduction */}
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

          {/* Name, quotes generator, socials*/}
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
      </Grid>
      
    </Container>
    )
}

export default About
