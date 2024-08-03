import React, { useState } from 'react';
import './projekty.css';

const Projekty = () => {
  const [popupContent, setPopupContent] = useState(null);

  const projects = [
    {
      title: 'Mazowsze kontra cukrzyca',
      image: '/cukrzyca.png',
      description: 'Krótka informacja o projekcie Mazowsze kontra cukrzyca'
    },
    {
      title: 'Mazowsze otwiera serce i świat dla dzieci z autyzmem',
      image: '/Dzieci.png',
      description: 'Krótka informacja o projekcie Mazowsze otwiera serce i świat dla dzieci z autyzmem'
    },
    {
      title: 'Dzienny Dom Opieki Medycznej w Białotarsku',
      image: '/DDOM_Białotarsk.png',
      description: 'Krótka informacja o projekcie Dzienny Dom Opieki Medycznej w Białotarsku'
    },
    {
      title: 'Dzienny Dom Opieki Medycznej w północno-zachodnim Mazowszu',
      image: '/DDOM_Rębów.png',
      description: 'Krótka informacja o projekcie Dzienny Dom Opieki Medycznej w północno-zachodnim Mazowszu'
    },
    {
      title: 'Z zatrudnieniem w przyszłość!',
      image: '/Zatrudnienie.png',
      description: 'Krótka informacja o projekcie Z zatrudnieniem w przyszłość!'
    },
    {
      title: 'Aktywność zawodowa drogą do sukcesu!',
      image: '/Aktywność.png',
      description: 'Krótka informacja o projekcie Aktywność zawodowa drogą do sukcesu!'
    },
    {
      title: 'Kutnowskie Centrum Usług Środowiskowych',
      image: '/kcus.png',
      description: 'Krótka informacja o projekcie Kutnowskie Centrum Usług Środowiskowych'
    },
    {
      title: 'PROJEKT 8',
      image: 'path/to/image8.jpg',
      description: 'Krótka informacja o projekcie PROJEKT 8'
    },
  ];

  const openPopup = (project) => {
    setPopupContent(project);
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  return (
    <div className="projekty">
      <h1 className="section-title">Nasze projekty</h1>
      <p className="section-subtitle">CISE realizuje swoją misję w oparciu o przeszłą (2007-2013), aktualną (2014-2020) oraz przyszłą (2021-2027) perspektywę finansową UE 2014-2020, pisząc wnioski aplikacyjne i realizując wygrane projekty szerokim aspekcie jako beneficjent, partner, wykonawca, podwykonawca. Wszystkie zasoby w dyspozycji CISE zapewniają najwyższą jakość wykonywanych usług.</p>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <button className="btn" onClick={() => openPopup(project)}>ZOBACZ WIĘCEJ</button>
          </div>
        ))}
      </div>
      {popupContent && (
        <div className="popup">
          <div className="popup-inner">
            <h2>{popupContent.title}</h2>
            <p>{popupContent.description}</p>
            <button className="btn-close" onClick={closePopup}>Zamknij</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projekty;
