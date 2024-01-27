import React, { useState } from 'react';
import cvPDF from '../../Images/CV_Marta_Belmonte.pdf';
import '../../styles/App.css'; 

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
          <p>
            Hola a tod@s! 🚀 Me llamo Marta y tengo el Grado de Relaciones Laborales de la Universidad Autónoma de Barcelona y también soy 💻 Web Developer! ⚡️ Una terremoto.
          </p>
          <p>
            Me siento entusiasmada por combinar mis habilidades en ambas áreas. He adquirido conocimientos sólidos en varios lenguajes de programación y disfruto enfrentando desafíos técnicos.
          </p>
          <p>
            Durante mi formación, he aprendido mucho y he tenido la oportunidad de conocer a profesionales inspiradores. Estoy orgullosa de mis logros hasta ahora y emocionada por las nuevas oportunidades en el mundo de la programación web.
          </p>
          <p>
            Estoy abierta a ofertas de trabajo en este campo y estoy lista para contribuir con mi pasión y habilidades. ¡Espero poder seguir creciendo y enfrentando nuevos desafíos!
          </p>
        </div>
        <div className="AboutMeButtons">
          <button className="download-cv" onClick={handleDownloadCV}>
            Descargar mi CV
          </button>
          <button className="show-pdf" onClick={handleShowPdf}>
            Ver mi CV
          </button>
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











