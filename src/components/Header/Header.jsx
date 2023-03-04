import React from 'react';
import './Header.css';
import CTA from './CTA';
import HeaderSocial from './HeaderSocial';
import imgPersonal from './../../assets/images/personal.png';
const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5> Hello I'm</h5>
                <h1>Hai Trieu</h1>
                <h5 className="text-light">Font-End Developer</h5>
                <CTA />
                <HeaderSocial />
                <div className="personal">
                    <img src={imgPersonal} alt="Hai Trieu" />
                </div>
                <a href="#contact" className="scroll__down">
                    Scoll down
                </a>
            </div>
        </header>
    );
};

export default Header;
