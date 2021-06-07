import React from 'react';
import Header from './header';
import Footer from './footer';

export const SharedLayout = ({ children, pkgVersion }) => {
  return (
    <>
      <Header pkgVersion={pkgVersion} />
      <main
        className="bg-white text-gray-600 flex flex-1 flex-col scrolling-touch w-3/4 m-auto"
      >
        {children}
      </main>
      <Footer />
    </>
  );
};
