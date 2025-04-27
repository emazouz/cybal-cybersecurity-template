
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import PriceAreaHomeOne from '../homes/home/PriceAreaHomeOne';

const Pricing = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Our Pricing" subtitle="Pricing" />
      <PriceAreaHomeOne />
      <FooterOne />
    </>
  );
};

export default Pricing;