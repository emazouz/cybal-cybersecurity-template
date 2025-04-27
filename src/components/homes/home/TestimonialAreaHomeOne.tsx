'use client'

import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

const testimonial_data = [
  {
    name: `James Clayton`,
    description: `Aqestic optio amet a ququam saepe aliquid voluate dicta fuga dolor saerror sed earum a magni soluta quam minus dolor dolor sed earum a magni soluta autem dolor error error sit quam minus sint rem a rerum dolobus veritatis delectus.`,

  },
  {
    name: `James Clayton`,
    description: `Aqestic optio amet a ququam saepe aliquid voluate dicta fuga dolor saerror sed earum a magni soluta quam minus dolor dolor sed earum a magni soluta autem dolor error error sit quam minus sint rem a rerum dolobus veritatis delectus.`,

  },
  {
    name: `James Clayton`,
    description: `Aqestic optio amet a ququam saepe aliquid voluate dicta fuga dolor saerror sed earum a magni soluta quam minus dolor dolor sed earum a magni soluta autem dolor error error sit quam minus sint rem a rerum dolobus veritatis delectus.`,

  },
  {
    name: `James Clayton`,
    description: `Aqestic optio amet a ququam saepe aliquid voluate dicta fuga dolor saerror sed earum a magni soluta quam minus dolor dolor sed earum a magni soluta autem dolor error error sit quam minus sint rem a rerum dolobus veritatis delectus.`,

  },
  {
    name: `James Clayton`,
    description: `Aqestic optio amet a ququam saepe aliquid voluate dicta fuga dolor saerror sed earum a magni soluta quam minus dolor dolor sed earum a magni soluta autem dolor error error sit quam minus sint rem a rerum dolobus veritatis delectus.`,

  },
  {
    name: `James Clayton`,
    description: `Aqestic optio amet a ququam saepe aliquid voluate dicta fuga dolor saerror sed earum a magni soluta quam minus dolor dolor sed earum a magni soluta autem dolor error error sit quam minus sint rem a rerum dolobus veritatis delectus.`,

  },
]

const TestimonialAreaHomeOne = () => {
  return (
    <>
      <section className="testi_home_area section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span>Top Reviews</span>
            <h2>Take a look our top <br />Customer feedback</h2>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Swiper 
              slidesPerView={2}
              spaceBetween={30}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1200: {
                  slidesPerView: 2,
                },
                1400: {
                  slidesPerView: 2,
                }
              }}
              id="testimonial-slider" className="owl-carousel">
                {testimonial_data.map((item, i) => (
                  <SwiperSlide key={i} className="testimonial">
                    <img src="assets/img/quote.png" alt="" />
                    <div className="testimonial_content">
                      <i className="ti-star"></i>{' '}
                      <i className="ti-star"></i>{' '}
                      <i className="ti-star"></i>{' '}
                      <i className="ti-star"></i>{' '}
                      <i className="ti-star"></i>{' '}
                      <p>{item.description}</p>
                    </div>
                    <div className="testi_pic_title">
                      <h4>{item.name}</h4>
                    </div>
                  </SwiperSlide>
                ))} 
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialAreaHomeOne;