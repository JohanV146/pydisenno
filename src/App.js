import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Disennopage from './pages/Disennopage';
import EligeDisenno from './pages/EligeDisenno';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/diseno" element={<Disennopage />} />
        <Route path="/nuevoDiseno" element={<EligeDisenno />} />
      </Routes>
    </Router>
  );
}

export default App;
