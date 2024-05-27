// src/components/common/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversalAccess, faGlobe, faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <header className="header">
      <div className="header-logo" onClick={() => handleNavigation("/")}>
        <div className="circle"></div>
        <span className="logo-text">INNOVAUTO</span>
      </div>
      <nav className="header-nav">
        <button onClick={() => handleNavigation("/modelos")}>Modelos</button>
        <button onClick={() => handleNavigation("/diseno")}>Diseño</button>
        <button onClick={() => handleNavigation("/personalizacion")}>Personalización</button>
        <button onClick={() => handleNavigation("/produccion")}>Producción</button>
      </nav>
      <div className="header-icons">
        <button onClick={() => handleNavigation("/login")}>
          <FontAwesomeIcon icon={faUniversalAccess} />
        </button>
        <button onClick={() => handleNavigation("/notifications")}>
          <FontAwesomeIcon icon={faGlobe} />
        </button>
        <button onClick={() => handleNavigation("/Login")}>
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
    </header>
  );
};

export default Header;
