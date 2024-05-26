// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import MainHeader from '../components/common/MainHeader';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import './HomePage.css';

function HomePage() {
  const [isHeader, setIsHeader] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsHeader(true);
    } else {
      setIsHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isHeader && <Header />}
      <MainHeader />
      <section className="hero-image">
        <h1>Tu camino hacia la perfección automotriz</h1>
        <h2>BMW M3</h2>
        <button>Ver más</button>
      </section>
      <div className="section-wrapper">
        <section className="section"></section>
        <section className="section-content">
          <p>Nuestra empresa se enorgullece de ofrecer vehículos de alta calidad...</p>
          <button>Ver más</button>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
