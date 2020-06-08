import React from 'react';
import {Link} from "react-router-dom";


const Navigation = () => {
    return (
        <header>
            <div className="container">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </ul>
            </div>
        </header>
    )
};

export default Navigation;