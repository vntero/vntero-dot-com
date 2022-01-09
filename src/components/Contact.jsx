import { Button, TextField } from "@mui/material"
import React, {useState} from "react"
import Axios from "axios"


function Contact() {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
       })

    function handle(element) {
        const newData={...data}
        newData[element.target.id] = element.target.value
        setData(newData)
        console.log(newData)
    }

    function submit(element) {

        element.preventDefault();

        Axios.post("http://localhost:5005/new-message", {
            name: data.name, 
            email: data.email, 
            message: data.message
        })

        .then(res => {
            console.log(res.data)
        })
    }

    return (
        <div className="div-body">
            <h1>Send me a message.</h1>
                <div className="contact">
                    <form onSubmit={(element) => submit(element)}>
                        <input onChange={(element) => handle(element)} id="name" value={data.name} type="text" placeholder="Name"></input>
                        <input onChange={(element) => handle(element)} id="email" value={data.email} type="email" placeholder="Email"></input>
                        <input onChange={(element) => handle(element)} id="message" value={data.message} type="text" placeholder="Message"></input>
                        <button>Submit</button>
                    </form>
                </div>
                
        </div>
    )
}

export default Contact

{/* <form action="https://formsubmit.co/collab@vntero.com" method="POST" id="message-form">
<TextField required fullWidth id="outlined-textarea" label="Name" placeholder="Hi, stranger" variant="outlined" /> <br />
<label htmlFor="BLANK SPACE"> </label> <br />

<TextField required fullWidth id="outlined-textarea" label="Email" placeholder="Enter your email address" type="email" /> <br />
<label htmlFor="BLANK SPACE"> </label> <br />

<TextField required fullWidth id="outlined-textarea" label="Message" placeholder="What's on your mind?" multiline rows={6}/> <br />
<label htmlFor="BLANK SPACE"> </label> <br />

<Button type="submit" form="message-form" value="Submit">Send</Button>
</form> */}

