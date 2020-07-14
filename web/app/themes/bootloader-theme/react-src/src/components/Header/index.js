import React from "react";
import './header.scss';
import {Link} from "react-router-dom";
import Logo from '../../images/logo/noft-logo-bez-t-a@2x.png';

const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt="logo" className="header-logo"/>
            <div className="header__input-container">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input type="text" placeholder="szukaj ..." className="header__input"/>
            </div>
            <Link to="/" className="header__create-account">załóż konto</Link>
            <Link to="/" className="header__login">zaloguj się</Link>
        </div>
    )
};

export default Header;