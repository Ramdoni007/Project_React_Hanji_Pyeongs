import React from 'react';
import Header from '../Components/shared/Header';
import Footer from '../Components/shared/Footer';

const PageLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
