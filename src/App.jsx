// App.js
import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../src/components/index';
import LoginPage from '../src/components/login';
import Dashboard from '../src/components/dashboard';
import Dropdown from '../src/components/Dropdown';
function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/Dropdown" element={<Dropdown />} />
    </Routes>
  );
}

export default App;
