import React from 'react';
import TeamArea from './TeamArea';
import Breadcrumb from '../common/Breadcrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';


const Team = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Our Team" subtitle="Team" />
      <TeamArea />
      <FooterOne />
    </>
  );
};

export default Team;