import React from 'react';
import './contact.css';
import Resume from "../Front_End_Engineer_Resume.pdf";

const contact = (props) => {
    return (
        <div className="contact-container">
            <div className="contact-content">
                <img src={props.ProfilePic} className="profilePic"></img>
                <a href={Resume} target="_blank">View Resume</a>
                <a href="tel:5104497232">(510) 449 - 7232</a>
                <a href="mailto:bryanmckernon@gmail.com">bryanmckernon@gmail.com</a>
            </div>
        </div>
    )
}

export default contact;