
import Blog from '@/components/blog';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Cybal Blog - Cyber Security Next js Template",
};


const index = () => {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  );
};

export default index;