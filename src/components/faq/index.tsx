
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FaqArea from './FaqArea';
import FooterOne from '@/layouts/footers/FooterOne';


if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}


const Faq = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Faq" subtitle="Faq" />
      <FaqArea />
      <FooterOne />
    </>
  );
};

export default Faq;