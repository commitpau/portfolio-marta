import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../styles/App.css';
import ProjectList from '../components/ProjectList/ProjectList';
import Contact from '../components/Contact/Contact';
import AboutMe from '../components/AboutMe/AboutMe';
import Skills from '../components/Skills/Skills';


function Navigation({ isActive }) {
  return (
    <nav className={`Navigation ${isActive ? 'active' : ''}`}>
      <ul>
        <li><Link to="/">Me presento</Link></li>
        <li><Link to="/skills">Habilidades</Link></li>
        <li><Link to="/projects">Mis proyectos</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
}

function MobileMenu({ isActive, toggleMenu }) {
  return (
    <div className={`menu-toggle ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
      ☰
    </div>
  );
}

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
  setMenuActive(!menuActive);
};

  return (
  <Router>
    <div className="App">
      <header className="App-header">
        <h1>Marta Belmonte Andrés</h1>
        <h4>Full-Stack Developer</h4>
        <MobileMenu isActive={menuActive} toggleMenu={toggleMenu} />
        <h3 className="h3-author">"Nunca es demasiado tarde para ser lo que podrías haber sido" – George Eliot</h3>
        <Navigation isActive={menuActive} />
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



























