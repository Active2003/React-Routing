import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs'; // Make sure to create and import this component
import Products from './Products'; // Make sure to create and import this component
import FarmerLogin from './FarmerLogin'; // Make sure to create and import this component
import BuyerLogin from './BuyerLogin'; // Make sure to create and import this component

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/FarmerLogin" element={<FarmerLogin />} />
      <Route path="/BuyerLogin" element={<BuyerLogin />} />
    </Routes>
  );
}

export default AppRouter;
