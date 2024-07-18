// componentes/Banner.js
import React from 'react';
import './Banner.css';

const Banner = ({ message, subtitle, buttonText }) => {
  return (
    <div className="banner">
      <h1>{message}</h1>
      {subtitle && <p>{subtitle}</p>}
      <button>{buttonText}</button>
      <div className="banner-features">
        <div className="feature">
          <i className="bi bi-calendar"></i>
          <span>Cursos actualizados regularmente</span>
        </div>
        <div className="feature">
          <i className="bi bi-people"></i>
          <span>Accede a una comunidad de aprendizaje</span>
        </div>
        <div className="feature">
          <i className="bi bi-lightbulb"></i>
          <span>Aprende con proyectos prácticos</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
