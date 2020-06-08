import React from 'react';
import {NavLink} from "react-router-dom";


const Navigation = () => {
    return (
        <header className="bootloader-menu">
            <div className="container">
                <ul className="bootloader-menu__list">
                    <NavLink 
                        exact
                        className="bootloader-menu__list-item" 
                        to="/"
                        activeClassName="bootloader-menu__list-item--active">
                        Home
                    </NavLink>
                    <NavLink 
                        exact
                        className="bootloader-menu__list-item" 
                        to="/about"
                        activeClassName="bootloader-menu__list-item--active">
                        About
                    </NavLink>
                    <NavLink 
                        exact
                        className="bootloader-menu__list-item" 
                        to="/contact"
                        activeClassName="bootloader-menu__list-item--active">
                        Contact
                    </NavLink>
                </ul>
            </div>
        </header>
    )
};

export default Navigation;