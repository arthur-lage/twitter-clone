import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Welcome from './pages/Welcome';
import Home from './pages/Home';

import GlobalStyles from './styles/GlobalStyles'
import './styles/scrollbar.css'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
