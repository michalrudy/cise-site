import React from 'react';
import './Kontakt.css';

const Kontakt = () => {
  return (
    <div className="kontakt-container">
      <div className="kontakt-background">
        <img src="/Kontakt.png" alt="Kontakt Background" />
      </div>
      <div className="kontakt-form">
        <form>
          <h2>Formularz kontaktowy</h2>
          <label htmlFor="name">Imię</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="phone">Telefon</label>
          <input type="tel" id="phone" name="phone" />
          
          <label htmlFor="message">Wiadomość</label>
          <textarea id="message" name="message" required></textarea>
          
          <button type="submit">Wyślij</button>
        </form>
      </div>
    </div>
  );
};

export default Kontakt;
