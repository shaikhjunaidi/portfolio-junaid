import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Calculator from './pages/Calculator';
import Puzzle from './pages/Puzzle';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/calculator.html" element={<Calculator />} />
        <Route path="/puzzle.html" element={<Puzzle />} />
      </Routes>
    </Router>
  );
}

export default App;
