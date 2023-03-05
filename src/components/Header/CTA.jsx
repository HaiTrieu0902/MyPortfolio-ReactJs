import React from 'react';
import CV from './../../assets/images/cv.pdf';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
const CTA = () => {
    return (
        <div className={cx('cta')}>
            <a href={CV} download className="btn">
                Download CV
            </a>
            <a href="#contact" className="btn btn-primary">
                Message
            </a>
        </div>
    );
};

export default CTA;
