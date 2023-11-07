import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import ProjectList from '../components/ProjectList/ProjectList';
import Contact from '../components/Contact/Contact';
import AboutMe from '../components/AboutMe/AboutMe';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Marta Belmonte</h1>
          <h4>Full Stack Developer</h4>
        </header>
        <Routes>
          <Route path="/" element={<AboutMe />} />
        </Routes>
        <Routes>
          <Route path="/" element={<ProjectList />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


























