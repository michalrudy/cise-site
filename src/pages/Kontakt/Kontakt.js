import React, { useEffect, useState } from 'react';
import './Kontakt.css';

const Kontakt = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/Kontakt.html')
      .then(response => response.text())
      .then(data => setContent(data));
  }, []);

  return (
    <div className="kontakt">
      <div className="content-section" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Kontakt;
