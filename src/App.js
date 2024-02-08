


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Pages from './Components/Pages';
import Footer from './Components/Footer';
import PrizingPlan from './Components/PrizingPlan';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/PrizingPlan" element={<PrizingPlan />} />
          <Route path="/Pages" element={<Pages />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
