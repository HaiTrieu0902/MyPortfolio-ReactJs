import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './Experience.css';
import classNames from 'classnames/bind';
import styles from './Experience.module.scss';
const cx = classNames.bind(styles);
const Experience = () => {
    return (
        <section id="experience">
            <h5>What skills I have</h5>
            <h2>My Experience</h2>

            <div className={cx('container', 'experience__container')}>
                <div className={cx('experience__frontend')}>
                    <h3>Frontend Develop</h3>
                    <div className={cx('experience__content')}>
                        <article className={cx('experience__detalis')}>
                            <BsFillPatchCheckFill className={cx('experience__detalis-icon')} />
                            <div className={cx('experience__detalis-item')}>
                                <h4>HTML5</h4>
                                <small className={cx('text-light')}>Experience</small>
                            </div>
                        </article>
                        <article className={cx('experience__detalis')}>
                            <BsFillPatchCheckFill className={cx('experience__detalis-icon')} />
                            <div className={cx('experience__detalis-item')}>
                                <h4>CSS</h4>
                                <small className={cx('text-light')}>Intermedia</small>
                            </div>
                        </article>
                        <article className={cx('experience__detalis')}>
                            <BsFillPatchCheckFill className={cx('experience__detalis-icon')} />
                            <div className={cx('experience__detalis-item')}>
                                <h4>Bootstrap</h4>
                                <small className={cx('text-light')}>Experience</small>
                            </div>
                        </article>
                        <article className={cx('experience__detalis')}>
                            <BsFillPatchCheckFill className={cx('experience__detalis-icon')} />
                            <div className={cx('experience__detalis-item')}>
                                <h4>Javasript</h4>
                                <small className={cx('text-light')}>Experience</small>
                            </div>
                        </article>
                        <article className={cx('experience__detalis')}>
                            <BsFillPatchCheckFill className={cx('experience__detalis-icon')} />
                            <div className={cx('experience__detalis-item')}>
                                <h4>ReactJs</h4>
                                <small className={cx('text-light')}>Experience</small>
                            </div>
                        </article>
                    </div>
                </div>

                {/* END OF FRONTEND */}

                <div className={cx('experience__backend')}>
                    <h3>Backend Develop</h3>

                    <div className={cx('experience__content')}>
                        <article className={cx('experience__detalis')}>
                            <BsFillPatchCheckFill className={cx('experience__detalis-icon')} />
                            <div className={cx('experience__detalis-item')}>
                                <h4>Node Js</h4>
                                <small className={cx('text-light')}>Experience</small>
                            </div>
                        </article>
                        <article className={cx('experience__detalis')}>
                            <BsFillPatchCheckFill className={cx('experience__detalis-icon')} />
                            <div className={cx('experience__detalis-item')}>
                                <h4>MongoDB</h4>
                                <small className={cx('text-light')}>Intermedia</small>
                            </div>
                        </article>
                        <article className={cx('experience__detalis')}>
                            <BsFillPatchCheckFill className={cx('experience__detalis-icon')} />
                            <div className={cx('experience__detalis-item')}>
                                <h4>PHP</h4>
                                <small className={cx('text-light')}>Experience</small>
                            </div>
                        </article>
                        <article className={cx('experience__detalis')}>
                            <BsFillPatchCheckFill className={cx('experience__detalis-icon')} />
                            <div className={cx('experience__detalis-item')}>
                                <h4>.Net</h4>
                                <small className={cx('text-light')}>Experience</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
