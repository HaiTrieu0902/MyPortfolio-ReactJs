import React from 'react';
import './Footer.css';
import { BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">
                HAITRIEU
            </a>

            <ul className="link">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#service">Services</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.facebook.com/trieuql123">
                    <BsFacebook />
                </a>
                <a href="https://www.instagram.com/h.trieu____/?hl=fr">
                    <BsInstagram />
                </a>
                <a href="https://github.com/HaiTrieu0902">
                    <BsGithub />
                </a>
            </div>

            <div className="footer__copyright">
                <small> &copy; HAI TRIEU completed</small>
            </div>
        </footer>
    );
};

export default Footer;
