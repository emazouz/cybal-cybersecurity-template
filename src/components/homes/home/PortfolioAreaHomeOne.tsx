import Link from 'next/link';
import React from 'react';

const PortfolioAreaHomeOne = () => {
  return (
    <>
      <section className="port_area section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span>latest Project</span>
            <h2>We made the latest product  <br />for our client</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_port">
                <img src="assets/img/portfolio/1.jpg" className="img-fluid" alt="image" />
                  <span>Creative</span>
                  <h4>Creative Solution</h4>
                  <Link href="/portfolio">View Details <i className="ti-arrow-top-right"></i></Link>
              </div>
            </div> 
            <div className="col-lg-6 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_port">
                <img src="assets/img/portfolio/2.jpg" className="img-fluid" alt="image" />
                  <span>Programming</span>
                  <h4>Programming & AI</h4>
                  <Link href="/portfolio">View Details <i className="ti-arrow-top-right"></i></Link>
              </div>
            </div> 
            <div className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_port">
                <img src="assets/img/portfolio/3.jpg" className="img-fluid" alt="image" />
                  <span>Cyber</span>
                  <h4>Computer security</h4>
                  <Link href="/portfolio">View Details <i className="ti-arrow-top-right"></i></Link>
              </div>
            </div> 
            <div className="col-lg-6 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_port">
                <img src="assets/img/portfolio/4.jpg" className="img-fluid" alt="image" />
                  <span>Solution</span>
                  <h4>On Board project</h4>
                  <Link href="/portfolio">View Details <i className="ti-arrow-top-right"></i></Link>
              </div>
            </div> 
            <div className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_port">
                <img src="assets/img/portfolio/5.jpg" className="img-fluid" alt="image" />
                  <span>Cyber</span>
                  <h4>Computer Secutity</h4>
                  <Link href="/portfolio">View Details <i className="ti-arrow-top-right"></i></Link>
              </div>
            </div> 
            <div className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_port">
                <img src="assets/img/portfolio/6.jpg" className="img-fluid" alt="image" />
                  <span>Protection</span>
                  <h4>Family Secutity</h4>
                  <Link href="/portfolio">View Details <i className="ti-arrow-top-right"></i></Link>
              </div>
            </div> 
          </div> 
        </div> 
      </section>
    </>
  );
};

export default PortfolioAreaHomeOne;