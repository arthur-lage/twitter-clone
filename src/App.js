import React from 'react'

import Welcome from './pages/Welcome';

import GlobalStyles from './styles/GlobalStyles'

import { Routes, Route } from 'react-router-dom'

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
