import React from "react"

function Contact() {
    return (
        <div className="div-body">
            <div className="contact-form">
                <form action="" id="message-form">
                    <label htmlFor="text">Name:</label> <br />
                    <input type="text" id="name" name="name"/> <br />
                    <label htmlFor="BLANK SPACE"> </label> <br />

                    <label htmlFor="email">Email:</label> <br />
                    <input type="email" id="email" name="email"/> <br />
                    <label htmlFor="BLANK SPACE"> </label> <br />

                    <label htmlFor="message">Message:</label> <br />
                    <textarea name="message" id="message" cols="45" rows="10" placeholder="What's on your mind?"></textarea> <br />
                    <label htmlFor="BLANK SPACE"> </label> <br />

                    <button type="submit" form="message-form" value="Submit">Send!</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
