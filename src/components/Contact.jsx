import { Button, TextField } from "@mui/material"
import React, {useState} from "react"
import Axios from "axios"
import {useNavigate} from 'react-router-dom'


function Contact() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
       })

    function handle(element) {
        const newData={...data}
        newData[element.target.name] = element.target.value
        setData(newData)
        console.log(newData)
    }

    function submit(element) {

        element.preventDefault();

        Axios.post("https://vntero-dot-com-server-production.up.railway.app/new-message", {
            name: data.name, 
            email: data.email, 
            message: data.message
        })

        .then(res => {
            console.log(res.data)
        })

        navigate('/thanks')
 
    }

    return (
        <div className="div-body">
            <h1>Send me a message</h1>
                <div className="contact">
                    <form onSubmit={(element) => submit(element)}>
                        <TextField onChange={(element) => handle(element)} name="name" value={data.name} type="text" required fullWidth id="outlined-textarea" label="Name" placeholder="Hi, stranger" variant="outlined" /> <br />
                        <label htmlFor="BLANK SPACE"> </label> <br />
                        
                        <TextField onChange={(element) => handle(element)} name="email" value={data.email} type="email" required fullWidth id="outlined-textarea" label="Email" placeholder="Enter your email address" /> <br />
                        <label htmlFor="BLANK SPACE"> </label> <br />
                        
                        <TextField onChange={(element) => handle(element)} name="message" value={data.message} type="text" required fullWidth id="outlined-textarea" label="Message" placeholder="What's on your mind?" multiline rows={6}/> <br />
                        <label htmlFor="BLANK SPACE"> </label> <br />
                        
                        <Button size="large" sx={{textTransform: 'lowercase'}} type="submit">Send</Button>
                        <label htmlFor="BLANK SPACE"> </label> <br />
                        <label htmlFor="BLANK SPACE"> </label> <br />
                    </form>
                </div>
                
        </div>
    )
}

export default Contact