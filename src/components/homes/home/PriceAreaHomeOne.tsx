
import React from 'react';

const PriceAreaHomeOne = () => {
  return (
    <>
      <section className="plan_home_area section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span>Pricing Plan</span>
            <h2>Our best pricing plan for <br />your solution</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
              <div className="pricingTable">
                <div className="pricingTable-header">
                  <h3 className="title">Personal</h3>
                </div>
                <div className="pricing-icon">
                  <i className="ti-medall"></i>
                </div>
                <ul className="pricing-content">
                  <li>5 website</li>
                  <li>50GB Disk Space</li>
                  <li>50 Email Accounts</li>
                  <li>50GB Monthly Bandwidth</li>
                  <li>10 Subdomains</li>
                </ul>
                <div className="price-value">
                  <span className="amount">$99</span>
                  <span className="duration">/mo</span>
                </div>
                <div>
                  <a href="#" className="btn_one">Purchase Now</a>
                </div>
              </div>
            </div> 
            <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
              <div className="pricingTable">
                <div className="pricingTable-header">
                  <h3 className="title">Business</h3>
                </div>
                <div className="pricing-icon">
                  <i className="ti-server"></i>
                </div>
                <ul className="pricing-content">
                  <li>5 website</li>
                  <li>50GB Disk Space</li>
                  <li>50 Email Accounts</li>
                  <li>50GB Monthly Bandwidth</li>
                  <li>10 Subdomains</li>
                </ul>
                <div className="price-value">
                  <span className="amount">$199</span>
                  <span className="duration">/mo</span>
                </div>
                <div>
                  <a href="#" className="btn_one">Purchase Now</a>
                </div>
              </div>
            </div> 
            <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
              <div className="pricingTable">
                <div className="pricingTable-header">
                  <h3 className="title">Premium</h3>
                </div>
                <div className="pricing-icon">
                  <i className="ti-cup"></i>
                </div>
                <ul className="pricing-content">
                  <li>5 website</li>
                  <li>50GB Disk Space</li>
                  <li>50 Email Accounts</li>
                  <li>50GB Monthly Bandwidth</li>
                  <li>10 Subdomains</li>
                </ul>
                <div className="price-value">
                  <span className="amount">$299</span>
                  <span className="duration">/mo</span>
                </div>
                <div>
                  <a href="#" className="btn_one">Purchase Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PriceAreaHomeOne;