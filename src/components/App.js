import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import MartaImage from '../Images/MartaImage.png'



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


function App() {

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleProjectClick = (index) => {
  const projectUrl = proyectos[selectedProjectIndex].urls[index];
  window.open(projectUrl, '_blank');
};

  return (
    <div className="App">
      <header id="animated-header" class="App-header">
        <div className="content">
          <h1>Bienvenid@</h1>
        </div>
      </header>
      <section className="AboutMe">
        <h2>Me presento</h2>
        <p>¡Hola! Me llamo Marta y soy una apasionada desarrolladora web con experiencia tanto en el frontend como en el backend. Mi corazón está en el frontend, donde disfruto dando vida a las interfaces de usuario, pero también tengo un fuerte conocimiento del lado del servidor y bases de datos, lo que me permite trabajar de manera integral en proyectos fullstack.</p>
        <p>En este espacio, encontrarás una muestra de mi trabajo, desde proyectos tanto con CSS3, SASS, JavaScript, React.js y Vue.js como Node.js, SQL y Express. </p>
        <p>Espero que disfruten explorando mi trabajo tanto como yo disfruté creándolo. Cada proyecto está lleno de ilusión y dedicación, y estoy emocionada de compartirlos contigo.</p>
      </section>
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
      <section className="Contact">
        <div className="PortraitContainer">
          <img className="Portrait" src={MartaImage} alt="Marta's Portrait" />
        </div>
        <div className="ContactInfo">
          <h2>Contáctame</h2>
          <p>Número de teléfono: 660 75 83 55</p>
          <p>Correo electrónico: contacto@example.com</p>
        </div>
      </section>
    </div>
  );
}

export default App;




























