import { Link } from "react-router-dom"
import React from "react"

function Navbar() {
    return (
        <nav>
            <Link to="/"><h4>vntero.com</h4></Link> 
            <Link to="/about"><p>About Me</p></Link>
            <Link to="/projects"><p>Projects</p></Link>
            <Link to="/contact"><p>Contact</p></Link>     
        </nav>
    )
}

export default Navbar
