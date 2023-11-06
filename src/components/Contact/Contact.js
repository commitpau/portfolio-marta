import React from 'react';
import '../../styles/App.css';
import MartaImage from '../../Images/MartaImage.png';

function Contact() {
  return (
    <section className="Contact">
        <div className="PortraitContainer">
          <img className="Portrait" src={MartaImage} alt="Marta's Portrait" />
        </div>
        <div className="ContactInfo">
          <h2>Contáctame</h2>
          <p>Por linkedin</p>
          <p>Correo electrónico: marta@martabelmonte.es</p>
        </div>
      </section>
  );
}

export default Contact;
