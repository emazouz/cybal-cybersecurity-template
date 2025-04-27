

import Link from 'next/link';
import React from 'react';

const ServiceArea = () => {
  return (
    <>
      <section className="service_area section-padding">
			<div className="container">	
				<div className="row">								
					<div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
						<div className="single_service">
							<img src="assets/img/service1.png" className="img-fluid" alt="image" />
							<h2>Malware Protection</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
							<Link href="/service-details">Read More <i className="ti-arrow-top-right"></i></Link>
						</div>
					</div>
					<div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
						<div className="single_service">
							<img src="assets/img/service2.png" className="img-fluid" alt="image" />
							<h2>Server Protection</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
							<Link href="/service-details">Read More <i className="ti-arrow-top-right"></i></Link>
						</div>
					</div>
					<div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
						<div className="single_service">
							<img src="assets/img/service3.png" className="img-fluid" alt="image" />
							<h2>Computer Security</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
							<Link href="/service-details">Read More <i className="ti-arrow-top-right"></i></Link>
						</div>
					</div>
					<div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
						<div className="single_service">
							<img src="assets/img/service8.png" className="img-fluid" alt="image" />
							<h2>Malware Protection</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
							<Link href="/service-details">Read More <i className="ti-arrow-top-right"></i></Link>
						</div>
					</div>
					<div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
						<div className="single_service">
							<img src="assets/img/service9.png" className="img-fluid" alt="image" />
							<h2>Server Protection</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
							<Link href="/service-details">Read More <i className="ti-arrow-top-right"></i></Link>
						</div>
					</div>
					<div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
						<div className="single_service">
							<img src="assets/img/service10.png" className="img-fluid" alt="image" />
							<h2>Computer Security</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
							<Link href="/service-details">Read More <i className="ti-arrow-top-right"></i></Link>
						</div>
					</div>
				</div>
			</div>
		</section>
    </>
  );
};

export default ServiceArea;