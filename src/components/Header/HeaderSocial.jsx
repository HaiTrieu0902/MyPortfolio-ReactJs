import React from 'react';
import { BsFacebook, BsGithub, BsInstagram } from 'react-icons/bs';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
const HeaderSocial = () => {
    return (
        <div className={cx('header__social')}>
            <a rel="noopener noreferrer" href="https://www.facebook.com/trieuql123" target="_blank">
                <BsFacebook />
            </a>
            <a rel="noopener noreferrer" href="https://github.com/HaiTrieu0902" target="_blank">
                <BsGithub />
            </a>
            <a rel="noopener noreferrer" href="https://www.instagram.com/h.trieu____/?hl=fr" target="_blank">
                <BsInstagram />
            </a>
        </div>
    );
};

export default HeaderSocial;
