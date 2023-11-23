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
];

function ProjectList() {
  const handleProjectClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className="ProjectsContainer">
      <h2>Mis Proyectos</h2>
      <div className="Projects">
        {proyectos.map((proyecto, groupIndex) => (
          <div className={`ProjectGroup ${proyecto.nombre}`} key={groupIndex}>
            <div className="ProjectGroupTitle">{proyecto.nombre}</div>
            <div className="ProjectGroupContainer">
              {proyecto.urls.map((urlInfo, projectIndex) => (
                <div className="Project" key={projectIndex}>
                  <button onClick={() => handleProjectClick(urlInfo.url)}>
                    {urlInfo.nombre}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectList;

