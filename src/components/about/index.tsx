
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import AboutArea from './AboutArea';
import BrandAreaHomeTwo from '../homes/home-2/BrandAreaHomeTwo';
import PortfolioAreaHomeOne from '../homes/home/PortfolioAreaHomeOne';
import ChooseAreaHomeOne from '../homes/home/ChooseAreaHomeOne';
import TestimonialAreaHomeOne from '../homes/home/TestimonialAreaHomeOne';
import TeamAreaHomeOne from '../homes/home/TeamAreaHomeOne';
import NewsletterAreaHomeOne from '../homes/home/NewsletterAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const About = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="About Us" subtitle="About Us" />
      <AboutArea />
      <BrandAreaHomeTwo />
      <PortfolioAreaHomeOne />
      <ChooseAreaHomeOne />
      <TestimonialAreaHomeOne />
      <TeamAreaHomeOne />
      <NewsletterAreaHomeOne />
      <FooterOne />
    </>
  );
};

export default About;