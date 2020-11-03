<<<<<<< HEAD
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

=======
import React from 'react';
import './contact.css';
import Resume from "../Front_End_Engineer_Resume.pdf";

const linkedinlink = () => {
    window.open("https://www.linkedin.com/in/bryan-mckernon/");
}

const gitlink = () => {
    window.open("https://github.com/Bryan-McKernon");
}

const contact = (props) => {
    return (
        <div className="contact-container">
            <div className="contact-content">
                <img src={props.ProfilePic} className="profilePic"></img>
                <a href={Resume} target="_blank">View Resume</a>
                <a href="tel:5104497232">(510) 449 - 7232</a>
                <a href="mailto:bryanmckernon@gmail.com">bryanmckernon@gmail.com</a>
                <div className="logosContainer">
                    <img src={props.LinkedInLogo} className="linkedinlogo" onClick={linkedinlink}/>
                    <img src={props.GitLogo} className="gitlogo" onClick={gitlink}/>
                </div>
            </div>
        </div>
    )
}

>>>>>>> dbc78780c34f7cce45ff8fcf6c733fbc30a93f3f
export default contact;