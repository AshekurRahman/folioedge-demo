import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import styles from './InnterPages.module.css'
import SectionTitle from '../../../common/SectionTitle/SectionTitle'

import image1 from './images/inner-1.jpg'
import image2 from './images/inner-2.jpg'
import image3 from './images/inner-3.jpg'
import image4 from './images/inner-4.jpg'
import image5 from './images/inner-5.jpg'
import image6 from './images/inner-6.jpg'
import image7 from './images/inner-7.jpg'
import image8 from './images/inner-8.jpg'
import image9 from './images/inner-9.jpg'
import image10 from './images/inner-10.jpg'
import image11 from './images/inner-11.jpg'
import image12 from './images/inner-12.jpg'
import image13 from './images/inner-13.jpg'
import image14 from './images/inner-14.jpg'
import image15 from './images/inner-15.jpg'
import image16 from './images/inner-16.jpg'
import image17 from './images/inner-17.jpg'
import image18 from './images/inner-18.jpg'
import image19 from './images/inner-19.jpg'
import image20 from './images/inner-20.jpg'
import image21 from './images/inner-21.jpg'
import image22 from './images/inner-22.jpg'
import image23 from './images/inner-23.jpg'
import image24 from './images/inner-24.jpg'
import image25 from './images/inner-25.jpg'

const InnterPages = () => {
  return (
    <div className={styles._area}>
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-7">
                <SectionTitle suptitle="Inner Pages" title="Complete Set of Inner Pages" className={styles._section_title} />
              </div>
          </div>          
          <div className="row">
            <div className="col">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                "480": {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                "992": {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                "1200": {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className={styles._slide_item} style={{backgroundImage: `url(${image1.src})`}}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles._slide_item} style={{backgroundImage: `url(${image2.src})`}}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles._slide_item} style={{backgroundImage: `url(${image3.src})`}}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles._slide_item} style={{backgroundImage: `url(${image4.src})`}}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles._slide_item} style={{backgroundImage: `url(${image5.src})`}}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles._slide_item} style={{backgroundImage: `url(${image6.src})`}}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles._slide_item} style={{backgroundImage: `url(${image7.src})`}}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles._slide_item} style={{backgroundImage: `url(${image8.src})`}}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles._slide_item} style={{backgroundImage: `url(${image9.src})`}}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles._slide_item} style={{backgroundImage: `url(${image10.src})`}}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles._slide_item} style={{backgroundImage: `url(${image11.src})`}}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles._slide_item} style={{backgroundImage: `url(${image12.src})`}}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles._slide_item} style={{backgroundImage: `url(${image13.src})`}}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles._slide_item} style={{backgroundImage: `url(${image14.src})`}}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles._slide_item} style={{backgroundImage: `url(${image15.src})`}}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles._slide_item} style={{backgroundImage: `url(${image16.src})`}}></div>
              </SwiperSlide>
            </Swiper>
            </div>
          </div>
      </div>
      
    </div>
  )
}

export default InnterPages