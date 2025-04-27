
'use client'

import Link from 'next/link';
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
 
const ServiceAreaHomeOne = () => {


  return (
    <>
      <section className="service_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="section-title">
                <span>Our services</span>
                <h2>What we do for your  <br />Cyber security solutions</h2>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="ser_btn">
                <Link href="/service" className="btn_two">View all services <i className="ti-arrow-top-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_service">
                <img src="assets/img/service1.png" className="img-fluid" alt="image" />
                <h2>Malware Protection</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                <Link href="/service">Read More <i className="ti-arrow-top-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_service">
                <img src="assets/img/service2.png" className="img-fluid" alt="image" />
                <h2>Server Protection</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                <Link href="/service">Read More <i className="ti-arrow-top-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_service">
                <img src="assets/img/service3.png" className="img-fluid" alt="image" />
                <h2>Computer Security</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                <Link href="/service">Read More <i className="ti-arrow-top-right"></i></Link>
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

export default ServiceAreaHomeOne;