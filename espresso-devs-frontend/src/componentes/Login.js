import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: 'tucorreo@example.com', // Valor predeterminado para ejemplo
    password: '55555'
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
    axios.post('http://localhost:5000/api/login', formData)
      .then(response => {
        alert('Login exitoso');
        // Lógica adicional después de login exitoso
      })
      .catch(error => {
        console.error('Error al iniciar sesión:', error);
        alert('Hubo un error al iniciar sesión. Por favor, intenta de nuevo.');
      });
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
