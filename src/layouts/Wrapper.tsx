
'use client'

import ScrollToTop from '@/components/common/ScrollToTop';
import React from 'react';

const Wrapper = ({ children }: any) => {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
};

export default Wrapper;