// src/components/Header.js
import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import './Banner.css'; // Asegúrate de importar el CSS correspondiente

const Header = () => (
  <header>
    <Link to="/" className="logo">
      <Logo />
    </Link>
    <ul className="navbarr">
      <li><Link to="/inicio" className="active">Inicio</Link></li>
      <li><Link to="/cursos">Cursos</Link></li>
      <li><Link to="/contacto">Contacto</Link></li>
    </ul>
    <div className="mainn">
      <Link to="/login" className="btn login-btn">Login</Link>
      <Link to="/signup" className="btn signup-btn">Inscripción</Link>
      <i className="bi bi-list" id="menu-icon"></i>
    </div>
  </header>
);

export default Header;
