import React from 'react';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      {/* <Header /> */}
       {children}
      <Footer  />
    </>
  );
}
