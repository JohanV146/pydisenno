import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import './RegisterPage.css';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    experiencia: '',
    usuario: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
    // Aquí se manejaría el envío del formulario, como una llamada a una API
  };

  return (
    <div>
      <Header />
      <div className="register-container">
        <h1>INNOVAUTO</h1>
        <h2>Registrar cuenta</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} className="custom-input" />
            <label htmlFor="apellido">Apellido</label>
            <input type="text" id="apellido" name="apellido" value={formData.apellido} onChange={handleChange} className="custom-input" />
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="custom-input" />
            <label htmlFor="telefono">Teléfono</label>
            <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} className="custom-input" />
            <label htmlFor="experiencia">Experiencia</label>
            <input type="text" id="experiencia" name="experiencia" value={formData.experiencia} onChange={handleChange} className="custom-input" />
            <label htmlFor="usuario">Usuario</label>
            <input type="text" id="usuario" name="usuario" value={formData.usuario} onChange={handleChange} className="custom-input" />
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="custom-input" />
            <label htmlFor="confirmPassword">Confirmar contraseña</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="custom-input" />
          </div>
          <div className="terms-container">
            <input type="checkbox" id="termsAccepted" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
            <label htmlFor="termsAccepted">Aceptar términos y condiciones</label>
          </div>
          <div className="button-container">
            <button type="button" className="back-button" onClick={() => handleNavigation("/login")}>Volver</button>
            <button type="submit" className="register-button">Registrar</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
