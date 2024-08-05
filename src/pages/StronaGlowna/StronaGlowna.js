import React from 'react';
import './StronaGlowna.css';

const StronaGlowna = () => {
  return (
    <div className="strona-glowna">
      <div className="video-background">
        <video autoPlay muted loop id="background-video">
          <source src="/Glowna.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  );
};

export default StronaGlowna;
