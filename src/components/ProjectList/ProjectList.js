import React, { useState } from 'react';
import '../../styles/App.css';

const proyectos = [
  {
    id: 1,
    nombre: "Proyectos con React",
    urls: [
      {
        nombre: "The 90's developers",
        url: "https://beta.adalab.es/project-promo-t-module-3-team-2/"
      },
      {
        nombre: "Encuentra las frases de Friends",
        url: "https://beta.adalab.es/modulo-3-evaluacion-intermedia-MartaBelmonte/"
      },
      {
        nombre: "Antiguedades Belmonte",
        url: "https://project-antiguedades.vercel.app/"
      }
    ]
  },
  {
    id: 2,
    nombre: "Proyectos con JavaScript",
    urls: [
      {
        nombre: "Welcome to Disney",
        url: "https://beta.adalab.es/modulo-2-evaluacion-final-MartaBelmonte/"
      },
      {
        nombre: "Crear tarjetas de visita",
        url: "https://beta.adalab.es/project-promo-t-module-2-team-2/"
      }
    ]
  },
  {
    id: 3,
    nombre: "Proyecto con HTML, CSS, SASS",
    urls: [
      {
        nombre: "Anonymous Proxy",
        url: "https://beta.adalab.es/modulo-1-evaluacion-final-MartaBelmonte/"
      }
    ]
  },
  {
    id: 3,
    nombre: "Pequeños retos",
    urls: [
      {
        nombre: "Escalera numérica",
        url: "https://martabelmonte.github.io/Escalera/"
      }
    ]
  }
];

function ProjectList() {
  const [currentProjects, setCurrentProjects] = useState(Array(proyectos.length).fill(0));

  const handleProjectClick = (url) => {
    window.open(url, '_blank');
  };

  const handleNextProject = (groupIndex) => {
    setCurrentProjects((prevProjects) =>
      prevProjects.map((prevProject, i) => (i === groupIndex ? (prevProject + 1) % proyectos[i].urls.length : prevProject))
    );
  };

  const handlePrevProject = (groupIndex) => {
    setCurrentProjects((prevProjects) =>
      prevProjects.map((prevProject, i) => (i === groupIndex ? (prevProject - 1 + proyectos[i].urls.length) % proyectos[i].urls.length : prevProject))
    );
  };

  return (
    <section className="ProjectsContainer">
      <h2>Mis Proyectos</h2>
      <div className="Projects">
        {proyectos.map((proyecto, groupIndex) => (
          <div className={`ProjectGroup ${proyecto.nombre}`} key={groupIndex}>
            <div className="ProjectGroupTitle">{proyecto.nombre}</div>
            <div className="ProjectGroupContainer">
              {proyecto.urls.length > 1 && (
                <button className="arrow left" onClick={() => handlePrevProject(groupIndex)}>
                  {'<'}
                </button>
              )}
              <div className="Project">
                <button onClick={() => handleProjectClick(proyecto.urls[currentProjects[groupIndex]].url)}>
                  {proyecto.urls[currentProjects[groupIndex]].nombre}
                </button>
              </div>
              {proyecto.urls.length > 1 && (
                <button className="arrow right" onClick={() => handleNextProject(groupIndex)}>
                  {'>'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectList;

