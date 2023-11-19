import React from 'react';
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
  const handleProjectClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className="Projects">
      <h2>Mis Proyectos</h2>
      {proyectos.map((proyecto) => (
        <div className="Project" key={proyecto.id}>
          <h3>{proyecto.nombre}</h3>
          <ul>
            {proyecto.urls.map((enlace, urlIndex) => (
              <li key={urlIndex}>
                <button onClick={() => handleProjectClick(enlace.url)}>
                  Ver {enlace.nombre}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default ProjectList;

