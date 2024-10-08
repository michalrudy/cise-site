import React from 'react';
import './Footer.css';
import { IonIcon } from '@ionic/react';
import { logoFacebook, logoTwitter, logoLinkedin, logoInstagram } from 'ionicons/icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      
      <ul className="menu">
        <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
        <li className="menu__item"><a className="menu__link" href="#">About</a></li>
        <li className="menu__item"><a className="menu__link" href="#">Services</a></li>
        <li className="menu__item"><a className="menu__link" href="#">Team</a></li>
        <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>
      </ul>
      <p>&copy;2024 Centrum Innowacyjności i Społecznej Ekonomii | Wszelkie prawa zastrzeżone</p>
    </footer>
  );
};

export default Footer;
