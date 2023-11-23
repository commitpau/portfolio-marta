import React, { useState } from 'react';
import cvPDF from '../../Images/Marta_Belmonte_CV.pdf';

function AboutMe() {
  const [showPdf, setShowPdf] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvPDF;
    link.download = 'cv_marta_belmonte.pdf';
    link.click();
  };

  const handleShowPdf = () => {
    setShowPdf(true);
  };

  const handleClosePdf = () => {
    setShowPdf(false);
  };

  return (
    <section className="AboutMe">
      <h2>Me presento</h2>
      <div className="AboutMeContent">
        <div className="AboutMeText">
          <p>¡Hola! Soy Marta, apasionada programadora web full-stack. Amo crear experiencias digitales cautivadoras y siempre estoy en busca de nuevos retos para ampliar mis habilidades. ¡Disfruten explorando mi trabajo tanto como yo disfruté creándolo! 😊💻</p>
        </div>
        <div className="AboutMeButtons">
          <button className="download-cv" onClick={handleDownloadCV}>
            Descargar mi CV
          </button>
          <div style={{ marginTop: '10px' }}>
            <button className="show-pdf" onClick={handleShowPdf}>
              Ver mi CV
            </button>
          </div>
        </div>
      </div>
      {showPdf && (
        <div className="pdf-viewer">
          <button className="close-pdf" onClick={handleClosePdf}>
            Cerrar
          </button>
          <iframe title="Marta_Belmonte_CV" src={cvPDF} width="100%" height="500px"></iframe>
        </div>
      )}
    </section>
  );
}

export default AboutMe;










