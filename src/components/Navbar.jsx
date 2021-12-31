import { Link } from "react-router-dom"
import React from "react"

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/"><img alt="vntero.com" src="aries.png" height={20} width={20}/></Link> 
            <Link style={{textDecoration: 'none'}} to="/about">About Me</Link>
            <Link style={{textDecoration: 'none'}} to="/projects">Projects</Link>
            <Link style={{textDecoration: 'none'}} to="/contact">Contact</Link>     
        </div>
    )
}

export default Navbar
