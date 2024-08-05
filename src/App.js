import React, { useRef, useState, useEffect, createRef } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import './Menu.css';
import { gsap } from 'gsap';
import StronaGlowna from './pages/StronaGlowna/StronaGlowna';
import Projekty from './pages/Projekty/Projekty';
import Aktualnosci from './pages/Aktualnosci/Aktualnosci';
import Kontakt from './pages/Kontakt/Kontakt';
import ONas from './pages/O_nas/ONas';
import Footer from './components/Footer'; // Import Footer

const items = [
  { name: "Strona Główna", color: "#f44336", href: "/" },
  { name: "Projekty", color: "#9c27b0", href: "/projekty" },
  { name: "Aktualności", color: "#673ab7", href: "/aktualnosci" },
  { name: "Kontakt", color: "#3f51b5", href: "/kontakt" },
  { name: "O nas", color: "#4caf50", href: "/onas" }
];

const Menu = ({ items }) => {
  const $root = useRef();
  const $indicator1 = useRef();
  const $indicator2 = useRef();
  const $items = useRef(items.map(createRef));
  const [active, setActive] = useState(0);

  useEffect(() => {
    const animate = () => {
      const menuOffset = $root.current.getBoundingClientRect();
      const activeItem = $items.current[active].current;
      const { width, height, top, left } = activeItem.getBoundingClientRect();

      const settings = {
        x: left - menuOffset.x,
        y: top - menuOffset.y,
        width: width,
        height: height,
        backgroundColor: items[active].color,
        ease: 'elastic.out(.7, .7)',
        duration: .8
      };

      gsap.to($indicator1.current, settings);
      gsap.to($indicator2.current, { ...settings, duration: 1 });
    };

    animate();
    window.addEventListener('resize', animate);
    return () => {
      window.removeEventListener('resize', animate);
    };
  }, [active, items]);

  return (
    <div ref={$root} className="menu">
      {items.map((item, index) => (
        <Link
          key={item.name}
          ref={$items.current[index]}
          className={`item ${active === index ? 'active' : ''}`}
          onMouseEnter={() => setActive(index)}
          to={item.href}
        >
          {item.name}
        </Link>
      ))}
      <div ref={$indicator1} className="indicator" />
      <div ref={$indicator2} className="indicator" />
    </div>
  );
};

const App = () => {
  const [highContrast, setHighContrast] = useState(false);

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    if (!highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  };

  return (
    <div className={`App`}>
      <header className="header">
        <button className="contrast-toggle" onClick={toggleContrast}>
          Zmień kontrast
        </button>
        <Menu items={items} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<StronaGlowna />} />
          <Route path="/projekty" element={<Projekty />} />
          <Route path="/aktualnosci" element={<Aktualnosci />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/onas" element={<ONas />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
