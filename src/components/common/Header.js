import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">INNOVAUTO</div>
      <nav>
        <ul>
          <li><a href="#modelos">Modelos</a></li>
          <li><a href="#diseno">Diseño</a></li>
          <li><a href="#personalizacion">Personalización</a></li>
          <li><a href="#produccion">Producción</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
