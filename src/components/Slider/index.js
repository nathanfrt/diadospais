import styles from "./Slider.module.css";

import pai1 from "../../Images/Pai01.jpeg";
import pai2 from "../../Images/Pai02.jpeg";
import pai3 from "../../Images/Pai03.jpeg";
import pai4 from "../../Images/Pai04.jpeg";
import pai5 from "../../Images/Pai05.jpeg";
import pai6 from "../../Images/Pai06.jpeg";
import pai7 from "../../Images/Pai07.jpeg";
import pai8 from "../../Images/Pai08.jpeg";
import pai9 from "../../Images/Pai09.jpeg";
import pai10 from "../../Images/Pai10.jpeg";
import pai11 from "../../Images/Pai11.jpeg";
import pai12 from "../../Images/Pai12.jpeg";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useState, useEffect } from "react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Slider() {
    const cards = [
        { id: 1, desc: pai1 },
        { id: 2, desc: pai2 },
        { id: 3, desc: pai3 },
        { id: 4, desc: pai4 },
        { id: 5, desc: pai5 },
        { id: 6, desc: pai6 },
        { id: 7, desc: pai7 },
        { id: 8, desc: pai8 },
        { id: 9, desc: pai9 },
        { id: 10, desc: pai10 },
        { id: 11, desc: pai11 },
        { id: 12, desc: pai12 },
    ];

    return (
        <div className={`container ${styles.slider} animate-on-visible`}>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    }
                }}
            >
                {cards.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className={`${styles.slideNav}`}>
                            <div className={`${styles.cardImg}`}>
                                <img src={item.desc} alt="Slider" className={`${styles.slideItem} `} />
                            </div><br />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Slider;
