
'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import VideoPopup from '@/modals/VideoPopup';

const HeroAreaHomeOne = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <section className="home_bg hb_height"
        style={{ backgroundImage: `url(/assets/img/bg/home-bg.jpg)`, backgroundSize: "cover", backgroundPosition: "center center" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-sm-12 col-xs-12">
              <div className="hero-text ht_top">
                <h1>We're a best cyber security problem solution team</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, consectetur adipiscing elit tempor ut labore</p>
              </div>
              <div className="home_btns">
                <Link href="/about" className="btn_one">Discover More</Link>
                <a className="video-play" 
                onClick={() => setIsVideoOpen(true)}
                style={{ cursor: "pointer" }} 
                ><i className="ti-image"></i> <span className="video-title">Video Tour</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={'i810CxN5Q6Q'}
      />
      {/* video modal end */}
    </>
  );
};

export default HeroAreaHomeOne;