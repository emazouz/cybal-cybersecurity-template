
import BlogDetails from '@/components/blog-details';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Cybal Blog Details - Cyber Security Next js Template",
};


const index = () => {
  return (
    <Wrapper>
      <BlogDetails />
    </Wrapper>
  );
};

export default index;