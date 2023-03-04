import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import './Services.css';
const Services = () => {
    return (
        <section id="service">
            <h5>What I Offer</h5>
            <h2>Service</h2>

            <div className="container services__container">
                {/* UI/UX */}
                <article className="service">
                    <div className="service__header">
                        <h3>UI/UX</h3>
                    </div>
                    <ul className="service__list">
                        <li className="service__item">
                            <BsCheckLg className="service__item-icon" />
                            <p>Analysis</p>
                        </li>
                        <li className="service__item">
                            <BsCheckLg className="service__item-icon" />
                            <p> Interface architecture 4Dynamic prototype</p>
                        </li>
                        <li className="service__item">
                            <BsCheckLg className="service__item-icon" />
                            <p> UI guidelines and kit</p>
                        </li>
                        <li className="service__item">
                            <BsCheckLg className="service__item-icon" />
                            <p> Graphic interface</p>
                        </li>
                        <li className="service__item">
                            <BsCheckLg className="service__item-icon" />
                            <p> Editing</p>
                        </li>
                        <li className="service__item">
                            <BsCheckLg className="service__item-icon" />
                            <p>Design review</p>
                        </li>
                    </ul>
                </article>

                {/* Web development */}
                <article className="service">
                    <div className="service__header">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li className="service__item">
                            <BsCheckLg className="service__item-icon" />
                            <p> Website design and development</p>
                        </li>
                        <li className="service__item">
                            <BsCheckLg className="service__item-icon" />
                            <p> Responsive web design</p>
                        </li>
                        <li className="service__item">
                            <BsCheckLg className="service__item-icon" />
                            <p>Content creation and management</p>
                        </li>
                        <li className="service__item">
                            <BsCheckLg className="service__item-icon" />
                            <p> E-commerce platform integration</p>
                        </li>
                        <li className="service__item">
                            <BsCheckLg className="service__item-icon" />
                            <p> Search engine optimization (SEO)</p>
                        </li>
                        <li className="service__item">
                            <BsCheckLg className="service__item-icon" />
                            <p> Website maintenance and support</p>
                        </li>
                        <li className="service__item">
                            <BsCheckLg className="service__item-icon" />
                            <p> Website hosting and migration</p>
                        </li>
                        <li className="service__item">
                            <BsCheckLg className="service__item-icon" />
                            <p> Social media integration</p>
                        </li>
                    </ul>
                </article>
                {/* END OF WEB DEVELOP */}

                {/* CONTENT */}
                <article className="service">
                    <div className="service__header">
                        <h3>Content Creatation</h3>
                    </div>
                    <ul className="service__list">
                        <li className="service__item">
                            <BsCheckLg className="service__item-icon" />
                            <p>Infographics</p>
                        </li>
                        <li className="service__item">
                            <BsCheckLg className="service__item-icon" />
                            <p> Video Content</p>
                        </li>
                    </ul>
                </article>
                {/* END OF CONTENT */}
            </div>
        </section>
    );
};

export default Services;
