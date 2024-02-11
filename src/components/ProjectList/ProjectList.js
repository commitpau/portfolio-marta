import React from 'react';
import '../../styles/App.css';
import mini_ab from '../../Images/mini_ab.png';
import mini_anpx from '../../Images/mini_anpx.png';
import mini_ap from '../../Images/mini_ap.png';
import mini_rm from '../../Images/mini_rm.png';
import mini_pm from '../../Images/mini_pm.png';
import mini_wd from '../../Images/mini_wd.png';
import mini_ja from '../../Images/mini_ja.png';


const proyectos = [
  {
    id: 1,
    nombre: "Proyectos con React",
    urls: [
      {
        nombre: "The 90's developers",
        url: "https://beta.adalab.es/project-promo-t-module-3-team-2/",
        miniatura: mini_pm
      },
      {
        nombre: "Rick and Morty Characters",
        url: "https://beta.adalab.es/modulo-3-evaluacion-final-MartaBelmonte/",
        miniatura: mini_rm
      },
      {
        nombre: "Antigüedades Belmonte",
        url: "https://project-antiguedades.vercel.app/",
        miniatura: mini_ab
      }
    ]
  },
  {
    id: 2,
    nombre: "Proyectos con JavaScript",
    urls: [
      {
        nombre: "Welcome to Disney",
        url: "https://beta.adalab.es/modulo-2-evaluacion-final-MartaBelmonte/",
        miniatura: mini_wd 
      },
      {
        nombre: "Crear tarjetas de visita",
        url: "https://beta.adalab.es/project-promo-t-module-2-team-2/",
        miniatura: mini_ap 
      },
      {
        nombre: "Juego de apuestas",
        url: "http://beta.adalab.es/modulo-2-evaluacion-intermedia-MartaBelmonte/",
        miniatura: mini_ja 
      }
    ]
  },
  {
    id: 3,
    nombre: "Proyecto con HTML, CSS, SASS",
    urls: [
      {
        nombre: "Anonymous Proxy",
        url: "https://beta.adalab.es/modulo-1-evaluacion-final-MartaBelmonte/",
        miniatura: mini_anpx
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
        {proyectos.map((grupo, index) => (
          <div className="ProjectGroup" key={index}>
            <h3 className="ProjectName">{grupo.nombre}</h3>
            <div className="ProjectGroupContainer">
              {grupo.urls.map((proyecto, proyectoIndex) => (
                <div className="Project" key={proyectoIndex}>
                  <h4>{proyecto.nombre}</h4>
                  <button onClick={() => handleProjectClick(proyecto.url)}>
                    Ver proyecto
                  </button>
                  <img src={proyecto.miniatura} alt={proyecto.nombre} className="miniatura-pequenita" />
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


