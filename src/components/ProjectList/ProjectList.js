import React from 'react';
import '../../styles/App.css';

const proyectos = [
  {
    id: 1,
    nombre: "Proyecto con React",
    urls: [
      "https://beta.adalab.es/project-promo-t-module-3-team-2/",
      "https://beta.adalab.es/modulo-3-evaluacion-intermedia-MartaBelmonte/"
    ]
  },
  {
    id: 2,
    nombre: "Proyecto con JavaScript",
    urls: [
      "https://beta.adalab.es/modulo-2-evaluacion-final-MartaBelmonte/",
      "https://beta.adalab.es/project-promo-t-module-2-team-2/"
    ]
  },
  {
    id: 3,
    nombre: "Proyecto con HTML, CSS, SASS",
    urls: [
      "https://beta.adalab.es/modulo-1-evaluacion-final-MartaBelmonte/"
    ]
  }
];

function ProjectList() {
  const handleProjectClick = (index) => {
    const projectUrl = proyectos[index].urls[0]; // Aquí selecciona la URL adecuada
    window.open(projectUrl, '_blank');
  };

  return (
    <section className="Projects">
        <h2>Mis Proyectos</h2>
        {proyectos.map((proyecto, index) => (
          <div className="Project" key={proyecto.id}>
            <h3>{proyecto.nombre}</h3>
            <ul>
              {proyecto.urls.map((url, urlIndex) => (
                <li key={urlIndex}>
                  <button onClick={() => handleProjectClick(urlIndex)}>
                    Ver Proyecto 
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
