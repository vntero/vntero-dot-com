import React from "react"
import Avatar from '@mui/material/Avatar';


function About() {
    return (
        <div className="div-body">
            <div>
                <h2>Hi. I'm Hugo.</h2>
                <div className="div-avatar">
                <Avatar alt="Hugo Antero" src="hugo.png" sx={{ width: 200, height: 200 }} />
                </div>

                <section>
                <h1>I am a Backend Developer looking to build and collaborate on <br />
                <span className="blue"> beautiful</span>, <span className="red">engaging</span> and <span className="green">functional</span> projects for the World Wide Web.</h1>
                </section>
            </div>

            <label htmlFor="BLANK SPACE"></label><br />
            <label htmlFor="BLANK SPACE"></label><br />

            <h2>Cards up my sleeve:</h2>

            <div className="div-skills">
                <a href="https://www.javascript.com/" target="_blank" rel="noreferrer"><img alt="JavaScript" src="javascript.png" height={50} width={50}/></a>
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img alt="TypeScript" src="typescript.png" height={45} width={45}/></a>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img alt="React" src="react.png" height={45} width={50}/></a>
                <a href="https://nodejs.org/" target="_blank" rel="noreferrer"><img alt="Node" src="node.png" height={50} width={80}/></a>
                <a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img alt="Express" src="express.png" height={20} width={80}/></a>
                <a href="https://jestjs.io/" target="_blank" rel="noreferrer"><img alt="Jest" src="jest.png" height={50} width={50}/></a>
            </div>

            <div className="div-skills">
                <a href="https://www.docker.com/" target="_blank" rel="noreferrer"><img alt="Docker" src="docker.png" height={45} width={60}/></a>
                <a href="https://kubernetes.io/" target="_blank" rel="noreferrer"><img alt="Kubernetes" src="kubernetes.png" height={50} width={50}/></a>
                <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img alt="MongoDB" src="mongodb.png" height={50} width={80}/></a>
                <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer"><img alt="PostgreSQL" src="pgsql.png" height={50} width={50}/></a>
                <a href="https://go.dev" target="_blank" rel="noreferrer"><img alt="Go" src="go.png" height={35} width={85}/></a>
                <a href="https://haskell.org/" target="_blank" rel="noreferrer"><img alt="Rust" src="haskell.png" height={50} width={50}/></a>
            </div>
        </div>
    )
}

export default About
