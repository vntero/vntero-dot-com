import { Button, TextField } from "@mui/material"
import React from "react"


function Contact() {
    return (
        <div className="div-body">
            <h1>Send me a message.</h1>

                <form action="/messages" method="post" id="message-form">
                    <TextField required fullWidth id="outlined-textarea" label="Name" placeholder="Hi, stranger" variant="outlined" /> <br />
                    <label htmlFor="BLANK SPACE"> </label> <br />
            
                    <TextField required fullWidth id="outlined-textarea" label="Email" placeholder="Enter your email address" type="email" /> <br />
                    <label htmlFor="BLANK SPACE"> </label> <br />

                    <TextField required fullWidth id="outlined-textarea" label="Message" placeholder="What's on your mind?" multiline rows={6}/> <br />
                    <label htmlFor="BLANK SPACE"> </label> <br />

                    <Button type="submit" form="message-form" value="Submit">Send</Button>
                </form>
        </div>
    )
}

export default Contact

