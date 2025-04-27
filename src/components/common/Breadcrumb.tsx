
import Link from 'next/link';
import React from 'react';



const Breadcrumb = ({ title = 'title', subtitle = 'subtitle' }: any) => {
  return (
    <>
      <section className="section-top">
        <div className="container">
          <div className="col-lg-10 offset-lg-1 text-center">
            <div className="section-top-title wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
              <h1>{title}</h1>
              <ul>
                <li><Link href="/">Home </Link></li>  {' '}
                <li> / {subtitle}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;