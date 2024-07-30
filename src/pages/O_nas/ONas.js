import React from 'react';
import './ONas.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ONas = () => {
  return (
    <div className="onas">
      <h1>O nas</h1>
      <p>Witamy na stronie o nas!</p>
      <div className="sections">
        <section className="section">
          <div className="text">
            <span className="badge">O Centrum Innowacyjności i Społecznej Ekonomii</span>
            <h2>Jedno miejsce, wiele rozwiązań</h2>
            <p>Misją <strong>CISE</strong> jest działalność służąca tworzeniu korzystnych warunków dla rozwoju przedsiębiorczości, innowacji oraz wszechstronne działanie na rzecz postępu edukacyjnego, społecznego, kulturalnego ekonomicznego, zdrowotnego i ekologicznego społeczności lokalnych i regionalnych według zasady zrównoważonego rozwoju.</p>
            <ul>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Tworzenie miejsc pracy</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Wsparcie innowacji</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Edukacja i doradztwo</li>
            </ul>
          </div>
          <div className="image">
            <img src="/pomoc.jpg" alt="Jedno miejsce, wiele rozwiązań" />
          </div>
        </section>
        <section className="section">
          <div className="text">
            <span className="badge">Projekty i Partnerstwa</span>
            <h2>Realizujemy projekty</h2>
            <p><strong>CISE</strong> jako partner społeczny, pomysłodawca i współrealizator projektów medycznych oferuje również w wyniku sześcioletnich doświadczeń fachową pomoc medyczno-opiekuńczą i psychologiczno-terapeutyczną.</p>
            <ul>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Profesjonalna pomoc</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Współpraca z ekspertami</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Kompleksowe usługi</li>
            </ul>
          </div>
          <div className="image">
            <img src="/project.jpg" alt="Realizujemy Twoje projekty" />
          </div>
        </section>
        <section className="section">
          <div className="text">
            <span className="badge">Zasoby Lokalowe i Techniczne</span>
            <h2>Doskonałe zaplecze</h2>
            <p><strong>CISE</strong> dysponuje zasobami lokalowymi i technicznymi na terenie m. in. Warszawy, Łodzi, Poznania, Torunia, Lublina, Kutna, Łomży, Kłodawy, Sierpca, Płocka, Gostynina w postaci sal szkoleniowych, komputerowych oraz pracowni robotycznych z możliwością pełnej obsługi cateringowej.</p>
            <ul>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Nowoczesne sale szkoleniowe</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Pracownie komputerowe</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Usługi cateringowe</li>
            </ul>
          </div>
          <div className="image">
            <img src="/office.jpg" alt="Doskonałe zaplecze" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ONas;
