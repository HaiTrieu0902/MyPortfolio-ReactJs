import React from 'react';
import './Testimonials.css';
import clientAvg1 from './../../assets/images/avatar1';
import clientAvg2 from './../..assets/images/avatar2.jpg';
import clientAvg3 from './../..assets/images/avatar3.jpg';
import clientAvg4 from './../..assets/images/avatar4.jpg';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        image: clientAvg1,
        name: 'Hai Bui',
        reiview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos aliquid consectetur dict',
    },
    {
        image: clientAvg2,
        name: 'Yasuo',
        reiview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos aliquid consectetur dict',
    },
    {
        image: clientAvg3,
        name: 'Lessin',
        reiview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos aliquid consectetur dict',
    },
    {
        image: clientAvg4,
        name: 'Zedd',
        reiview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos aliquid consectetur dict',
    },
];
const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Reivew from client</h5>
            <h2>Testimonials</h2>

            <Swiper
                className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {data.map((item, index) => {
                    return (
                        <SwiperSlide key={index} className="testimonials">
                            <div className="client__avatar">
                                <img src={item.image} alt="" />
                            </div>
                            <div>
                                <h5>{item.name}</h5>
                                <small className="client__review">{item.reiview}</small>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Testimonials;
