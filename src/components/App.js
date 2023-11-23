import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../styles/App.css';
import ProjectList from '../components/ProjectList/ProjectList';
import Contact from '../components/Contact/Contact';
import AboutMe from '../components/AboutMe/AboutMe';
import Skills from '../components/Skills/Skills';


function Navigation() {
  return (
    <nav className="Navigation">
      <ul>
        <li><Link to="/">About Me</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="header-left">
            <h1>Marta Belmonte</h1>
            <h4>Full-Stack Developer</h4>
          </div>
          <Navigation />
        </header>
        <Routes>
            <Route path="/" element={<React.Fragment><AboutMe /><Skills /><ProjectList /><Contact /></React.Fragment>} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;



























