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
                <h1>I am Full Stack Web Developer looking to build and collaborate on <br />
                <span className="blue"> beautiful</span>, <span className="red">engaging</span> and <span className="green">functional</span> projects for the World Wide Web.</h1>
                </section>
            </div>

            <label htmlFor="BLANK SPACE"></label><br />
            <label htmlFor="BLANK SPACE"></label><br />

            <h2>Cards up my sleeve:</h2>

            <div className="div-skills">
                <a href="https://www.javascript.com/" target="_blank" rel="noreferrer"><img alt="JavaScript" src="javascript.png" height={50} width={50}/></a>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img alt="React" src="react.png" height={50} width={50}/></a>
                <a href="https://nodejs.org/" target="_blank" rel="noreferrer"><img alt="Node" src="node.png" height={50} width={50}/></a>
                <a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img alt="Express" src="express.png" height={50} width={80}/></a>
                <a href="https://handlebarsjs.com/" target="_blank" rel="noreferrer"><img alt="Handlebars" src="handlebars.png" height={20} width={65}/></a>
                
            </div>
            <div className="div-skills">
                <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img alt="MongoDB" src="mongodb.png" height={50} width={80}/></a>
                <a href="https://html.spec.whatwg.org/" target="_blank" rel="noreferrer"><img alt="HTML" src="html.png" height={50} width={50}/></a>
                <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img alt="CSS" src="css.png" height={50} width={50}/></a>
                <a href="https://mui.com/" target="_blank" rel="noreferrer"><img alt="Material-UI" src="mui.png" height={50} width={50}/></a>
                <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"><img alt="Bootstrap" src="bootstrap.png" height={50} width={50}/></a>
            </div>
        </div>
    )
}

export default About
