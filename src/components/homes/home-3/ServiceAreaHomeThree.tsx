
import Link from 'next/link';
import React from 'react';

const ServiceAreaHomeThree = () => {
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
            <div className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_service">
                <img src="assets/img/service4.png" className="img-fluid" alt="image" />
                <h2>Computer Security</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                <Link href="/service">Read More <i className="ti-arrow-top-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_service">
                <img src="assets/img/service5.png" className="img-fluid" alt="image" />
                <h2>File Duplication & Access</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                <Link href="/service">Read More <i className="ti-arrow-top-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_service">
                <img src="assets/img/service6.png" className="img-fluid" alt="image" />
                <h2>Network Protections</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                <Link href="/service">Read More <i className="ti-arrow-top-right"></i></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_service">
                <img src="assets/img/service7.png" className="img-fluid" alt="image" />
                <h2>Finger Print Security</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                <Link href="/service">Read More <i className="ti-arrow-top-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaHomeThree;