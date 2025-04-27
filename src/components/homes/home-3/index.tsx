

import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroAreaHomeThree from './HeroAreaHomeThree';
import FeatureAreaHomeThree from './FeatureAreaHomeThree';
import ServiceAreaHomeThree from './ServiceAreaHomeThree';
import AboutAreaHomeThree from './AboutAreaHomeThree';
import BrandAreaHomeTwo from '../home-2/BrandAreaHomeTwo';
import AboutUsAreaHomeThree from './AboutUsAreaHomeThree';
import CounterAreaHomeOne from '../home/CounterAreaHomeOne';
import PriceAreaHomeOne from '../home/PriceAreaHomeOne';
import TestimonialAreaHomeOne from '../home/TestimonialAreaHomeOne';
import ChooseAreaHomeOne from '../home/ChooseAreaHomeOne';
import TeamAreaHomeOne from '../home/TeamAreaHomeOne';
import BlogAreaHomeOne from '../home/BlogAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const HomeThree = () => {
  return (
    <>
      <HeaderOne />
      <HeroAreaHomeThree />
      <FeatureAreaHomeThree />
      <ServiceAreaHomeThree />
      <AboutAreaHomeThree />
      <BrandAreaHomeTwo />
      <AboutUsAreaHomeThree />
      <CounterAreaHomeOne style_2={true} />
      <PriceAreaHomeOne />
      <TestimonialAreaHomeOne />
      <ChooseAreaHomeOne />
      <TeamAreaHomeOne />
      <BlogAreaHomeOne />
      <FooterOne />
    </>
  );
};

export default HomeThree;