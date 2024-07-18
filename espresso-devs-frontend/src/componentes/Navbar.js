import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={process.env.PUBLIC_URL + '/imagen/Picsart_24-07-16_23-35-21-537.png'} alt="Logo" />
      </Link>

      <ul className="navbarr">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/courses">Cursos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>

      <div className="mainn">
        <Link to="/login" className="btn login-btn">Login</Link>
        <Link to="/register" className="btn signup-btn">Inscripción</Link> {/* Enlace de inscripción */}
        <i className="bi bi-list" id="menu-icon"></i>
      </div>
    </header>
  );
};

export default Navbar;
