import React from 'react';
import './StronaGlowna.css';

const StronaGlowna = () => {
  return (
    <div className="stronaglowna">
      <h1>Strona Główna</h1>
      <div className="content-section">
        <h2>Witamy w Centrum Innowacji i Społecznej Ekonomii!</h2>
        <p>Misją CISE jest działalność służąca tworzeniu korzystnych warunków dla rozwoju przedsiębiorczości, innowacji oraz wszechstronne działanie na rzecz postępu edukacyjnego, społecznego, kulturalnego ekonomicznego, zdrowotnego i 
          ekologicznego społeczności lokalnych i regionalnych według zasady zrównoważonego rozwoju.</p>
        <img src="/home/michal/projekty/cise-site/cise/logo.jpg" alt="Example" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};

export default StronaGlowna;
