import React, { useRef } from 'react';
import './Contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillMessage } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';

const cx = classNames.bind(styles);
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY');
        e.target.reset();
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact me</h2>

            <div className={cx('container', 'contact__container')}>
                <div className={cx('contact__options')}>
                    <article className={cx('contact__option-list')}>
                        <HiOutlineMail className={cx('contact__option-icon')} />
                        <h4>Email</h4>
                        <h5>haitrieuql0902@gmail.com</h5>
                        <a rel="noopener noreferrer" target="_blank" href="mailto:haitrieuql0902@gmail.com">
                            Send a message
                        </a>
                    </article>
                    <article className={cx('contact__option-list')}>
                        <AiFillMessage className={cx('contact__option-icon')} />
                        <h4>Message</h4>
                        <h5>Bùi Hải Triều</h5>
                        <a rel="noopener noreferrer" target="_blank" href="https://m.me/trieuql123">
                            Send a message
                        </a>
                    </article>
                    <article className={cx('contact__option-list')}>
                        <FaFacebook className={cx('contact__option-icon')} />
                        <h4>Facebook</h4>
                        <h5>Bùi Hải Triều</h5>
                        <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/trieuql123">
                            Send a message
                        </a>
                    </article>
                </div>
                {/* END OF CONTACT OPTION */}
                <form ref={form} action="" className={cx('form')} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Full name....." required />
                    <input type="email" name="email" placeholder="Email....." required />
                    <textarea name="message" placeholder="Your message" cols="30" rows="10" required></textarea>
                    <button type="submit" className={cx('btn', 'btn-primary')}>
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
