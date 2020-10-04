import React from 'react';
import Footer from "../components/general/Footer"
import Header from "../components/general/Header"

const Layout = (props) => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
);
export default Layout;
