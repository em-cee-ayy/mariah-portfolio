import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './Pages/Portfolio.jsx'; 
import HappyTrailsCaseStudy from './Pages/casestudy1.jsx'; 
import FluxCaseStudy from './Pages/casestudy2.jsx';

function App() {
  return (
    <Routes>
      {/* Route 1: The main portfolio page */}
      <Route path="/" element={<Portfolio />} /> 

      {/* Route 2: The Happy Trails Case Study page (Path fixed previously) */}
      <Route 
        path="/casestudy/happytrailscasestudy" 
        element={<HappyTrailsCaseStudy />} 
      />

      {/* Route 3: The Paw Find Case Study page */}
      {/* The path must match the slug created by createPageUrl("PawFindCaseStudy") */}
      <Route 
        path="/casestudy/fluxcasestudy" 
        element={<FluxCaseStudy />} 
      />
      
    </Routes>
  );
}

export default App;