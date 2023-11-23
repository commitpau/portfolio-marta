import React from 'react';
import '../../styles/App.css';
import MartaImage from '../../Images/MartaImage.png';

function Contact() {
  const linkedinURL = 'https://www.linkedin.com/in/marta-belmonte'; 
  const githubURL = 'https://github.com/MartaBelmonte'; 

  return (
    <section className="Contact">
      <div className="PortraitContainer">
        <img className="Portrait" src={MartaImage} alt="Marta's Portrait" />
      </div>
      <div className="ContactInfo">
        <h2>Información de contacto</h2>
        <p>
          <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in fa-beat"></i> LinkedIn
          </a>
        </p>
        <p>
          <a href={githubURL} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github fa-beat"></i> GitHub
          </a>
        </p>
        <p>marta@martabelmonte.es</p>
      </div>
    </section>
  );
}

export default Contact;
