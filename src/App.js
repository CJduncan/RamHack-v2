import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Updates from './pages/Updates';
import Events from './pages/Events';
import Announcements from './pages/Announcements';
import Contact from './pages/Contact';
import About from './pages/About';
import Explore from './pages/Explore';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Updates />} />
        <Route path="/events" element={<Events />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </Router>
  );
}

export default App;