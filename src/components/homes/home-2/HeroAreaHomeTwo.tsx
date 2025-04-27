
'use client'

import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';


// slider setting 
const slider_setting = {
  speed: 4000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  pauseOnFocus: false,
  pauseOnHover: true,
};

const slider_data = [
  "*Access Control Lists*",
  "*Search Functionalty*",
  "*legal Disclaimers*",
  "*Network Seqmenttation*",
  "*Feedback & Reporting*",
  "*Access Control Lists*",
  "*Search Functionalty*",
  "*legal Disclaimers*",
  "*Network Seqmenttation*",
  "*Feedback & Reporting*",

]

const HeroAreaHomeTwo = () => {
  return (
    <>
      <section className="home_bg"
        style={{ backgroundImage: `url(/assets/img/bg/home-bg2.jpg)`, backgroundSize: "cover", backgroundPosition: "center center" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="hero-text ht2">
                <h1>Rising Cybersecurity <br />Threats Highlight <br />Need for Vigilance</h1>
              </div>
              <div className="skill_btn">
                <Link href="/service" className="btn_one">Get your services <i className="ti-arrow-top-right"></i></Link>
                <a href="#" className="btn_two">Contact with us <i className="ti-arrow-top-right"></i></a>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="home_me_img">
                <img src="assets/img/home-img2.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marq_text">
        <div id="supermarquee1">
          <Slider
            {...slider_setting}
            className="swiper-container tp-text-slider-4-active"
          >
            {slider_data.map((item, i) => (
              <div key={i}
                className="me-4">
                {item}
              </div>
            ))}
          </Slider>

        </div>
      </div>

    </>
  );
};

export default HeroAreaHomeTwo;