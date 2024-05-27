import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import './Disennopage.css';

const Disennopage = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="disennopage">
      <Header />
      <div className="content">
        <div className="left-box" onClick={() => handleNavigation("/gestionDiseno")}>
          <div className="inner-box">
            <button className="button-large">
              Gestión de Diseño
            </button>
          </div>
        </div>
        <div className="right-box" onClick={() => handleNavigation("/nuevoDiseno")}>
          <div className="inner-box">
            <button className="button-large">
              Nuevo Diseño
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Disennopage;
