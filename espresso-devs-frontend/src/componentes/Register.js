// componentes/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }
    axios.post('http://localhost:5000/api/register', formData)
      .then(response => {
        alert('Registro exitoso');
        // Lógica adicional después de un registro exitoso
      })
      .catch(error => {
        console.error('Error al registrarse:', error);
        alert('Hubo un error al registrarse. Por favor, intenta de nuevo.');
      });
  };

  return (
    <div className="register-form">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirmar Contraseña" value={formData.confirmPassword} onChange={handleChange} required />
        <button type="submit" className="btn signup-btn">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
