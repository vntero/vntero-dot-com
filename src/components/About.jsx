import Avatar from '@mui/material/Avatar'
import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

function About() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <div className="div-body-padding">
            <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    <h1>backend developer looking to build and collaborate on <br />
                    <span className="blue"> beautiful</span>, <span className="red">engaging</span>, and <span className="green">functional</span> projects for the world wide web.</h1>
                </Grid>
                <Grid item xs={6} md={6}>
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
            

            <label htmlFor="BLANK SPACE"></label><br />
            <label htmlFor="BLANK SPACE"></label><br />

            <h2>Cards up my sleeve:</h2>

            <div className="div-skills">
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img alt="TypeScript" src="typescript.png" height={45} width={45}/></a>
                <a href="https://nodejs.org/" target="_blank" rel="noreferrer"><img alt="Node" src="node.png" height={50} width={80}/></a>
                <a href="https://go.dev" target="_blank" rel="noreferrer"><img alt="Go" src="go.png" height={35} width={85}/></a>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img alt="React" src="react.png" height={45} width={50}/></a>
                <a href="https://jestjs.io/" target="_blank" rel="noreferrer"><img alt="Jest" src="jest.png" height={50} width={50}/></a>
            </div>

            <div className="div-skills">
                <a href="https://graphql.org/" target="_blank" rel="noreferrer"><img alt="AWS" src="gql.png" height={50} width={50}/></a>
                <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img alt="MongoDB" src="mongo.png" height={70} width={60}/></a>
                <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer"><img alt="PostgreSQL" src="pgsql.png" height={50} width={50}/></a>
                <a href="https://www.docker.com/" target="_blank" rel="noreferrer"><img alt="Docker" src="docker.png" height={45} width={60}/></a>
                <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer"><img alt="AWS" src="aws.png" height={40} width={60}/></a>
            </div>
        </div>
      </Box>
    )
}

export default About
