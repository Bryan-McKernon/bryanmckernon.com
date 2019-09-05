import React from 'react';
import './navbar.css';

const navbar = (props) => {
    const navbarExpand = () => {
        alert("working");
    }
    return (
        <div className="navbar-bar">   
            <button className="navbar-button">
                H O M E
            </button>

            <button className="navbar-button">
                P R O J E C T S
            </button>

            <button className="navbar-button">
                C O N T A C T 
            </button>

            <img className="navbar-menu-button" src={props.navbarMenuButton} onClick={navbarExpand}></img>
        </div>
    )
}

export default navbar;
