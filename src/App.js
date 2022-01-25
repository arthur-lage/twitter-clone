import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Welcome from './pages/Welcome';

import GlobalStyles from './styles/GlobalStyles'
import './styles/scrollbar.css'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
