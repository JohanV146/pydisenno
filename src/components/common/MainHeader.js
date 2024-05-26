import React from 'react';
import './MainHeader.css';

function MainHeader() {
  return (
    <header className="main-header">
      <nav>
        <ul>
          <li className="logo">
            <a href="#logo">
              <div className="circle"></div>
              INNOVAUTO
            </a>
          </li>
          <li><a href="#modelos">Modelos</a></li>
          <li><a href="#diseno">Diseño</a></li>
          <li><a href="#personalizacion">Personalización</a></li>
          <li><a href="#produccion">Producción</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
