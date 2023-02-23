import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home';

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};
