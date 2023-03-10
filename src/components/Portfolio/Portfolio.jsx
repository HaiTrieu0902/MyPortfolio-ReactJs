import React from 'react';
import './Portfolio.css';
import portfolioItem1 from './../../assets/images/portfolio1.jpg';
import portfolioItem2 from './../../assets/images/portfolio2.jpg';
import portfolioItem3 from './../../assets/images/portfolio3.jpg';
import portfolioItem4 from './../../assets/images/portfolio4.jpg';
import portfolioItem5 from './../../assets/images/portfolio5.png';

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

const data = [
    {
        id: 1,
        image: portfolioItem1,
        title: 'This is a portfolio 1',
        github: 'https://github.com/',
        demo: 'https://github.com/',
    },
    {
        id: 2,
        image: portfolioItem2,
        title: 'This is a portfolio 2',
        github: 'https://github.com/',
        demo: 'https://github.com/',
    },
    {
        id: 3,
        image: portfolioItem3,
        title: 'This is a portfolio 3',
        github: 'https://github.com/',
        demo: 'https://github.com/',
    },
    {
        id: 4,
        image: portfolioItem4,
        title: 'This is a portfolio 4',
        github: 'https://github.com/',
        demo: 'https://github.com/',
    },
    {
        id: 5,
        image: portfolioItem5,
        title: 'This is a portfolio 5',
        github: 'https://github.com/',
        demo: 'https://github.com/',
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <Swiper
                className="container portfolio__container"
                slidesPerView={2}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
            >
                {data.map((item, index) => {
                    return (
                        <SwiperSlide key={item.id} className="portfolio__item">
                            <div className="portfolio__item-img">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <h3>{item.title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={item.github} className="btn btn_small">
                                    Github
                                </a>
                                <a href={item.demo} target="_blank" className="btn btn_small btn-primary">
                                    LiveDemo
                                </a>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Portfolio;
