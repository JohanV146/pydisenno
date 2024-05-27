import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import './EligeDisenno.css';

const EligeDisenno = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="elige-disenno">
      <Header />
      <div className="content">
        <div className="image-box image1">
        </div>
        <div className="text-button-container">
            <p>Texto 1</p>
            <button onClick={() => handleNavigation("/ruta1")}>Botón 1</button>
        </div>
        <div className="image-box image2">
          <div className="text-button-container">
            <p>Texto 2</p>
            <button onClick={() => handleNavigation("/ruta2")}>Botón 2</button>
          </div>
        </div>
        <div className="image-box image3">
          <div className="text-button-container">
            <p>Texto 3</p>
            <button onClick={() => handleNavigation("/ruta3")}>Botón 3</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EligeDisenno;
