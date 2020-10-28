import React from 'react';
// import Footer from '../components/general/Footer';
import Header from '../components/general/Header';
import '../assets/styles/components/Layout.scss';

const Layout = ({ children }) => (
  <div className='layout__container'>
    <Header />
    {children}
  </div>
);
export default Layout;
