
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import BlogArea from './BlogArea';
import FooterOne from '@/layouts/footers/FooterOne';

const Blog = () => {
  return (
    <>
    <HeaderOne />
    <Breadcrumb title="Latest Blog" subtitle="Blog"  />
    <BlogArea />
    <FooterOne />      
    </>
  );
};

export default Blog;