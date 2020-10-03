import React from 'react';
import Footer from './Footer';

const Layout = (props) => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
);

export default Layout;
