import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <h1>INNOVAUTO</h1>
        <h2>Acceder</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} className="custom-input" />
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} className="custom-input" />
          </div>
          <div className="label-container">
            <label className="forgot-password">¿Olvidaste tu contraseña?</label>
            <label className="guest-mode">¿Esta no es tu computadora? Usa una ventana de navegación privada para acceder. Más información para usar el modo de invitado</label>
          </div>
          <div className="button-container">
            <button type="button" className="create-account-button" onClick={() => handleNavigation("/register")}>Crear cuenta</button>
            <button type="submit" className="login-button">Siguiente</button>
          </div>
          <div className="google-login-container">
            <label htmlFor="google">Usar tu cuenta de Google</label>
            <button type="button" className="buttongoogle" onClick={() => handleNavigation("/")}>
              <FontAwesomeIcon icon={faGoogle} />
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
