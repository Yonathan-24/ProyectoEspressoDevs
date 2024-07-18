import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
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
    axios.post('http://localhost:5000/api/contact', formData)
      .then(response => {
        alert('Mensaje enviado con éxito');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch(error => {
        console.error('Error al enviar el mensaje:', error);
        alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
      });
  };

  return (
    <section id="contacto">
      <div className="content">
        <h2>Contacto</h2>
        <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Mensaje" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit" className="btn signup-btn">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
