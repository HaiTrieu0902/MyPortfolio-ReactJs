import React from 'react';
import './About.css';
import imagePersonal from '~/assets/images/trieu169.png';
import { BiAward } from 'react-icons/bi';
import { FaUsers, FaProjectDiagram } from 'react-icons/fa';
const About = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={imagePersonal} alt="HAI TRIEU" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about__cards">
                        <article className="about__card">
                            <BiAward className="about__icon"></BiAward>
                            <h5>Experience</h5>
                            <small> Less 1 year working </small>
                        </article>
                        <article className="about__card">
                            <FaUsers className="about__icon"></FaUsers>
                            <h5>Clients</h5>
                            <small> 3 People</small>
                        </article>
                        <article className="about__card">
                            <FaProjectDiagram className="about__icon"></FaProjectDiagram>
                            <h5>Project</h5>
                            <small> 5 Completed</small>
                        </article>
                    </div>
                    <p className="about_content">
                        Hello, my name is Hai Trieu and I have 1 year of professional experience in the Information
                        Technology (IT) industry. I am a Front-End developer and I have been involved in various IT
                        projects during my tenure. Professional Experience During my one year of professional experience
                        in the IT industry, I have developed a strong understanding of various technologies and their
                        practical applications. I have been involved in software development projects where I was
                        responsible for designing, developing, and testing software applications. I have also worked on
                        database management projects where I was responsible for designing, developing, and maintaining
                        databases. Additionally, I have experience working with cloud technologies such as AWS and
                        Azure, where I have assisted in the deployment and management of cloud-based applications.
                        Skills In addition to my practical experience, I have developed several technical and
                        non-technical skills that are essential for success in the IT industry. Some of the key
                        technical skills I have include proficiency in programming languages such as Java, Python, and
                        SQL. I am also knowledgeable in front-end development technologies such as HTML, CSS, and
                        JavaScript. Furthermore, I have excellent problem-solving skills, strong attention to detail,
                        and the ability to work well in a team environment. I have also developed strong communication
                        skills, both written and verbal, that enable me to collaborate effectively with stakeholders and
                        clients.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Let's Contact
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
