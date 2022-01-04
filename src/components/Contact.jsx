import { Button, TextField } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"


function Contact() {
    return (
        <div className="div-body">
            <h2>Is there something that you'd like to share with me?</h2>

                <form action="" id="message-form">
                    <TextField fullWidth id="outlined-textarea" label="Name" placeholder="Hi, stranger" variant="outlined" /> <br />
                    <label htmlFor="BLANK SPACE"> </label> <br />
            
                    <TextField fullWidth id="outlined-textarea" label="Email" placeholder="Enter your email address" type="email" /> <br />
                    <label htmlFor="BLANK SPACE"> </label> <br />

                    <TextField fullWidth id="outlined-textarea" label="Message" placeholder="What's on your mind?" multiline rows={6}/> <br />
                    <label htmlFor="BLANK SPACE"> </label> <br />

                    <Button type="submit" form="message-form" value="Submit">Send</Button>
                </form>
        </div>
    )
}

export default Contact

