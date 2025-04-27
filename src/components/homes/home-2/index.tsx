
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import HeroAreaHomeTwo from './HeroAreaHomeTwo';
import AboutAreaHomeTwo from './AboutAreaHomeTwo';
import ServiceAreaHomeTwo from './ServiceAreaHomeTwo';
import AboutUsAreaHomeTwo from './AboutUsAreaHomeTwo';
import BrandAreaHomeTwo from './BrandAreaHomeTwo';
import PortfolioAreaHomeOne from '../home/PortfolioAreaHomeOne';
import ChooseAreaHomeOne from '../home/ChooseAreaHomeOne';
import TestimonialAreaHomeOne from '../home/TestimonialAreaHomeOne';
import TeamAreaHomeOne from '../home/TeamAreaHomeOne';
import BlogAreaHomeOne from '../home/BlogAreaHomeOne';
import CounterAreaHomeOne from '../home/CounterAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const HomeTwo = () => {
  return (
    <>
      <HeaderOne />
      <HeroAreaHomeTwo />
      <AboutAreaHomeTwo />
      <ServiceAreaHomeTwo />
      <AboutUsAreaHomeTwo />
      <BrandAreaHomeTwo />
      <PortfolioAreaHomeOne />
      <ChooseAreaHomeOne />
      <TestimonialAreaHomeOne />
      <TeamAreaHomeOne />
      <BlogAreaHomeOne />
      <CounterAreaHomeOne style_2={true} />
      <FooterOne />
    </>
  );
};

export default HomeTwo;