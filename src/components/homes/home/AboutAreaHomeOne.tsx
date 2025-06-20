import React from 'react';

const AboutAreaHomeOne = () => {
  return (
    <>
      <section className="ab_one section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="ab_img">
                <img src="assets/img/about1.png" className="img-fluid" alt="image" />
              </div>
            </div> 
            <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
              <div className="ab_content">
                <span>About our company</span>
                <h2>This is 24/7 Cyber security operation center for your problem solution.</h2>
              </div>
              <div className="abmv">
                <h4><img src="assets/img/check.png" alt="" /> Identifiying threats</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
              </div>
              <div className="abmv">
                <h4><img src="assets/img/check.png" alt="" /> Security management</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
              </div>
            </div> 
          </div> 
        </div> 
      </section>
    </>
  );
};

export default AboutAreaHomeOne;