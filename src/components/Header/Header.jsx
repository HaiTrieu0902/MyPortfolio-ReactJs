import React from 'react';
import CTA from './CTA';
import HeaderSocial from './HeaderSocial';
import imgPersonal from './../../assets/images/personal.png';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
const Header = () => {
    return (
        <header>
            <div className={cx('container', 'header__container')}>
                <h5> Hello I'm</h5>
                <h1>Hai Trieu</h1>
                <h5 className={cx('text-light')}>Font-End Developer</h5>
                <CTA />
                <HeaderSocial />
                <div className={cx('personal')}>
                    <img src={imgPersonal} alt="Hai Trieu" />
                </div>
                <a href="#contact" className={cx('scroll__down')}>
                    Scoll down
                </a>
            </div>
        </header>
    );
};

export default Header;
