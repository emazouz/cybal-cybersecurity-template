
import Link from 'next/link';
import React from 'react';

const AboutAreaHomeTwo = () => {
  return (
    <>
      <section className="ab_one section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
              <div className="ab_content">
                <span>About our company</span>
                <h2>Our experts team are providing a 24/7 technical support and services.</h2>
              </div>
              <div className="abmv_list">
                <ul>
                  <li><img src="assets/img/check.png" alt="" /> Secure user access to data and applications system.</li>
                  <li><img src="assets/img/check.png" alt="" /> A security-first approach to protect customer workloads.</li>
                  <li><img src="assets/img/check.png" alt="" /> Extend security and risk mitigation capabilities now.</li>
                  <li><img src="assets/img/check.png" alt="" /> Safeguard your most valuable asset—data.</li>
                </ul>
              </div>
              <div className="skill_btn">
                <Link href="/service" className="btn_one">Get your services <i className="ti-arrow-top-right"></i></Link>
                <a href="#" className="btn_two">Contact with us <i className="ti-arrow-top-right"></i></a>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="ab_img ai_top">
                <p>Maximize value with our on-demand, outcome-based, transparent vulnerability assessment, automated remediation.</p>
                <img src="assets/img/about3.png" className="img-fluid" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAreaHomeTwo;