
import Link from 'next/link';
import React from 'react';

const HeroAreaHomeThree = () => {
  return (
    <>
      <section className="home_bg"
        style={{ backgroundImage: `url(assets/img/bg/home-bg3.jpg)`, backgroundSize: "cover", backgroundPosition: "center center" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12col-xs-12">
              <div className="hero-text ht2">
                <h1>We're Providing The Best Cyber Solutions For Your Security.</h1>
              </div>
              <div className="skill_btn">
                <Link href="/service" className="btn_one">Get your services <i className="ti-arrow-top-right"></i></Link>
                <a href="#" className="btn_two">Contact with us <i className="ti-arrow-top-right"></i></a>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="home_me_img">
                <img src="assets/img/home-img3.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAreaHomeThree;