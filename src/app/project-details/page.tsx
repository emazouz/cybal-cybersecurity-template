import ProjectDetails from '@/components/project-details';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Cybal Project Details - Cyber Security Next js Template",
};

const index = () => {
  return (
    <Wrapper>
      <ProjectDetails />
    </Wrapper>
  );
};

export default index;