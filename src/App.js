// src/App.js

import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import AdvertismentList from './AdvertismentList';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AdvertismentList />
      
      <Footer />
    </>
  );
}

export default App;
