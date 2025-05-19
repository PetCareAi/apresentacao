import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Apresentacao from './pages/Apresentacao';
import './styles/global.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Apresentacao />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;