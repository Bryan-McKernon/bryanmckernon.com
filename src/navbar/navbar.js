import React from 'react';
import './navbar.css';

const navbar = (props) => {
    return (
        <div className="navbar-bar" id="navbar-bar-id">
            <img className="navbar-menu-button" src={props.navbarMenuButton} onClick={props.navbarExpand}></img>

            <button className="navbar-button" id="navbar-button-home" onClick={props.HomeClickEvent}>
                H O M E
            </button>

            <button className="navbar-button" id="navbar-button-projects" onClick={props.ProjectsClickEvent}>
                P R O J E C T S
            </button>

            <button className="navbar-button" id="navbar-button-contact" onClick={props.ContactClickEvent}>
                C O N T A C T 
            </button>
        </div>
    )
}
export default navbar;