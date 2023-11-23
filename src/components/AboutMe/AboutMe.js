import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import cvPDF from '../../Images/Marta_Belmonte_CV.pdf';


function AboutMe() {
  const [numPages, setNumPages] = useState(null);
  const [showPDF, setShowPDF] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvPDF;
    link.download = 'cv_marta_belmonte.pdf'; // Nombre del archivo que se descargará
    link.click();
  };

  const handleShowPDF = () => {
    setNumPages(null); // Reinicia el número de páginas al mostrar el PDF
    setShowPDF(true);
  };

  const handleClosePDF = () => {
    setShowPDF(false);
  };

  return (
    <section className="AboutMe">
      <h2>Me presento</h2>
      <h2>Me presento</h2>
      <p>¡Hola! Soy Marta, una apasionada programadora web con experiencia en tecnologías orientadas tanto en Frontend como en Backend. Me encanta crear experiencias digitales cautivadoras y funcionales. Siempre estoy buscando desafíos emocionantes para ampliar mis habilidades y contribuir a proyectos innovadores. ¡Espero poder colaborar contigo pronto!</p>
      <p>En este espacio, encontrarás una muestra de mi trabajo, desde proyectos tanto con CSS3, SASS, JavaScript, React.js y Vue.js como Node.js, SQL y Express. </p>
      <p>Espero que disfruten explorando mi trabajo tanto como yo disfruté creándolo. Cada proyecto está lleno de ilusión y dedicación, y estoy emocionada de compartirlos contigo.</p>

      <button className="view-cv" onClick={handleShowPDF}>
        Ver mi CV
      </button>
      <button className="download-cv" onClick={handleDownloadCV}>
        Descargar mi CV
      </button>

      {showPDF && (
        <div className="pdf-viewer">
          <button className="close-pdf" onClick={handleClosePDF}>
            Cerrar
          </button>
          <Document file={cvPDF} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={1} />
          </Document>
          <p>
            Página 1 de {numPages}
          </p>
        </div>
      )}
    </section>
  );
}

export default AboutMe;



