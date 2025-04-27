
'use client'
import React from 'react';

const NewsletterAreaHomeOne = () => {
  return (
    <>
      <section className="newsletter_area section-padding">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-10 offset-lg-1 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="subs_form">
                <h3>Subscribe to our newsletter, We don't make any spam.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor enim minim</p>
                <form onClick={(e) => e.preventDefault()} className="home_subs">
                  <input type="text" className="subscribe__input" placeholder="Enter your Email Address" />
                  <button type="button" className="subscribe__btn"><i className="ti-new-window"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsletterAreaHomeOne;