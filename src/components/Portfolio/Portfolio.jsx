import React from 'react';
import './Portfolio.css';
import portfolioItem1 from './../../assets/images/Admin Dashboard.png';
import portfolioItem2 from './../../assets/images/Home.png';
import portfolioItem3 from './../../assets/images/My Portfolio.png';
import portfolioItem4 from './../../assets/images/TeamStay.png';
import portfolioItem5 from './../../assets/images/Play Music.png';

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
        title: 'Dashboard Admin',
        github: 'https://github.com/HaiTrieu0902/dashbroad-admin',
        demo: 'https://haitrieu0902-dashbroad-admin.netlify.app/',
    },
    {
        id: 2,
        image: portfolioItem2,
        title: 'Ecommerce Template',
        github: 'https://github.com/HaiTrieu0902/eCommerce_React',
        demo: 'https://haitrieu0902-ecommerce-template.netlify.app/',
    },
    {
        id: 3,
        image: portfolioItem3,
        title: 'My Portfolio',
        github: 'https://github.com/HaiTrieu0902/MyPortfolio-ReactJs',
        demo: 'https://haitrieu0902.github.io/MyPortfolio-ReactJs/',
    },
    {
        id: 4,
        image: portfolioItem4,
        title: 'Team Stay',
        github: 'https://github.com/HaiTrieu0902/TeamStay_develop',
        demo: 'https://haitrieu0902-teamstay.netlify.app/',
    },
    {
        id: 5,
        image: portfolioItem5,
        title: 'Music Play',
        github: 'https://github.com/HaiTrieu0902/MusicPlay',
        demo: 'https://haitrieu0902-musicplayer.netlify.app/',
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
                                <a rel="noreferrer" target="_blank" href={item.github} className="btn btn_small">
                                    Github
                                </a>
                                <a
                                    rel="noreferrer"
                                    href={item.demo}
                                    target="_blank"
                                    className="btn btn_small btn-primary"
                                >
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
