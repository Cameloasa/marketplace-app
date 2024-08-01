// src/App.js

import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import AdvertismentList from './AdvertismentList';
import Card from './Card';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AdvertismentList />
      <Card />
      <Footer />
    </>
  );
}

export default App;
