
import ServiceDetails from '@/components/service-details';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "Cybal Service Details - Cyber Security Next js Template",
};

const index = () => {
  return (
    <Wrapper>
      <ServiceDetails />
    </Wrapper>
  );
};

export default index;