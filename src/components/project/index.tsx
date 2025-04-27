
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import ProjectArea from './ProjectArea';
import FooterOne from '@/layouts/footers/FooterOne';

const Project = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Our Project" subtitle="Project" />
      <ProjectArea />
      <FooterOne />
    </>
  );
};

export default Project;