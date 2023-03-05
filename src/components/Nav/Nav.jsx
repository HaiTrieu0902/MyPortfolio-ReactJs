import React from 'react';
import './Nav.css';
import { BiBookmarks, BiHomeSmile, BiUserPin } from 'react-icons/bi';
import { FaServicestack } from 'react-icons/fa';
import { MdOutlinePermContactCalendar } from 'react-icons/md';
import { useState } from 'react';
const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');

    return (
        <nav>
            <a onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} href="#">
                <BiHomeSmile className="icon" />
            </a>
            <a onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} href="#about">
                <BiUserPin className="icon" />
            </a>
            <a
                onClick={() => setActiveNav('#experience')}
                className={activeNav === '#experience' ? 'active' : ''}
                href="#experience"
            >
                <BiBookmarks className="icon" />
            </a>
            <a
                onClick={() => setActiveNav('#service')}
                className={activeNav === '#service' ? 'active' : ''}
                href="#service"
            >
                <FaServicestack className="icon" />
            </a>
            <a
                onClick={() => setActiveNav('#contact')}
                className={activeNav === '#contact' ? 'active' : ''}
                href="#contact"
            >
                <MdOutlinePermContactCalendar className="icon" />
            </a>
        </nav>
    );
};

export default Nav;
