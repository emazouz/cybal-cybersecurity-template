
import Link from 'next/link';
import React from 'react';

const ChooseAreaHomeOne = () => {
  return (
    <>
      <section className="why_area section-padding" 
      style={{ backgroundImage: `url(assets/img/bg/section-2.jpg)`, backgroundSize: "cover", backgroundPosition: "center center" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
              <div className="ab_content">
                <span>Why choose us</span>
                <h2>Cyber security skills gap widens as demand for experts continues to soar.</h2>
                <p>Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commo doligula eget dolorenean massa.In enim justo, rhoncus ut, imperdiet avene natis vitae justo nullam dictum felis eu pede mollis pretium Inte ger tincid unt cras dapibus.</p>
              </div>
              <div className="row">
                <div className="col-lg-4 col-sm-4 col-xs-12 no-padding">
                  <div className="single-project2">
                    <h2 className="counter-num">94%</h2>
                    <h4>Quality services</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-xs-12 no-padding">
                  <div className="single-project2">
                    <h2 className="counter-num">69%</h2>
                    <h4>Skilled Staff</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-xs-12 no-padding">
                  <div className="single-project2">
                    <h2 className="counter-num">99%</h2>
                    <h4>Support team</h4>
                  </div>
                </div> 
                <div className="skill_btn">
                  <Link href="/service" className="btn_one">Get your services <i className="ti-arrow-top-right"></i></Link>
                  <a href="#" className="btn_two">Contact with us <i className="ti-arrow-top-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="sk_img">
                <img src="assets/img/computer.png" className="img-fluid" alt="image" />
              </div>
            </div> 
          </div>
        </div> 
      </section>
    </>
  );
};

export default ChooseAreaHomeOne;