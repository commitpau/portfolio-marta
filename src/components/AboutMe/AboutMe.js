import React from 'react';
import cvPDF from '../../Images/Marta_Belmonte_CV.pdf'; // Importa el archivo PDF de tu CV

function AboutMe() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvPDF;
    link.download = 'cv_marta_belmonte.pdf'; // Nombre del archivo que se descargará
    link.click();
  };

  return (
    <section className="AboutMe">
      <h2>Me presento</h2>
      <p>¡Hola! Soy Marta, una apasionada programadora web con experiencia en tecnologías orientadas tanto en Frontend como en Backend. Me encanta crear experiencias digitales cautivadoras y funcionales. Siempre estoy buscando desafíos emocionantes para ampliar mis habilidades y contribuir a proyectos innovadores. ¡Espero poder colaborar contigo pronto!</p>
      <p>En este espacio, encontrarás una muestra de mi trabajo, desde proyectos tanto con CSS3, SASS, JavaScript, React.js y Vue.js como Node.js, SQL y Express. </p>
      <p>Espero que disfruten explorando mi trabajo tanto como yo disfruté creándolo. Cada proyecto está lleno de ilusión y dedicación, y estoy emocionada de compartirlos contigo.</p>
      
      <button onClick={handleDownloadCV}>Descárgate mi CV</button>
    </section>
  );
}

export default AboutMe;
