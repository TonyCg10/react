import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import HomeDog from './components/Home-Dog';
import DetailDog from './components/Detail-Dog';
import Navbar from './components/Navbar';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<HomeDog />} />
        <Route path='detail/:name' element={<DetailDog />} />
      </Routes>
    </AnimatePresence >
  );
}

export default App;
