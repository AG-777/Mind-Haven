// App.js
import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../src/components/index';
import LoginPage from '../src/components/login';
import Dashboard from '../src/components/dashboard';
import Dropdown from '../src/components/Dropdown';
import Appointment from '../src/components/appointment';
import MoodTracker from '../src/components/moodtracker';
import ContactUs from './components/contact_us';
import CommunityPage from './components/community';
function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/Dropdown" element={<Dropdown />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/moodtracker" element={<MoodTracker/>}/>
      <Route path="/contact_us" element={<ContactUs />} />
      <Route path="/community" element={<CommunityPage/>}/>
    </Routes>
  );
}

export default App;
