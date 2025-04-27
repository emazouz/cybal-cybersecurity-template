

import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import ServiceArea from './ServiceArea';
import FooterOne from '@/layouts/footers/FooterOne';

const Service = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Service" subtitle="Service" />
      <ServiceArea />
      <FooterOne />
    </>
  );
};

export default Service;