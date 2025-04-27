import React from 'react';
import ContactArea from './ContactArea';
import Breadcrumb from '../common/Breadcrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';

const Contact = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Contact Us" subtitle="Contact" />
      <ContactArea />
      <FooterOne />
    </>
  );
};

export default Contact;