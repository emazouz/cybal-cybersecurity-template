
'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const BrandAreaHomeTwo = () => {
  return (
    <>
      <div className="partner-logo">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <Swiper 
              loop={true}
              autoplay={true}
              spaceBetween={30}
              slidesPerView={5}
              breakpoints={{
                0: {
                  slidesPerView: 2,                  
                },
                768: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 5,
                }
              }}
              className="partner">
                <SwiperSlide>
                  <a href="#"><img src="assets/img/partner/1.png" alt="image" /></a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#"><img src="assets/img/partner/2.png" alt="image" /></a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#"><img src="assets/img/partner/3.png" alt="image" /></a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#"><img src="assets/img/partner/4.png" alt="image" /></a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#"><img src="assets/img/partner/5.png" alt="image" /></a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#"><img src="assets/img/partner/1.png" alt="image" /></a>
                </SwiperSlide>
                {/* <a href="#"><img src="assets/img/partner/1.png" alt="image" /></a>
                <a href="#"><img src="assets/img/partner/2.png" alt="image" /></a>
                <a href="#"><img src="assets/img/partner/3.png" alt="image" /></a>
                <a href="#"><img src="assets/img/partner/4.png" alt="image" /></a>
                <a href="#"><img src="assets/img/partner/5.png" alt="image" /></a>
                <a href="#"><img src="assets/img/partner/1.png" alt="image" /></a> */}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandAreaHomeTwo;