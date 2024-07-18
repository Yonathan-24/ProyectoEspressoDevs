import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import './ListaCursos.css';

const ListaCursos = ({ courses }) => {
  return (
    <section className="lista-cursos">
      <h2>Cursos Disponibles</h2>
      <div className="cursos">
        {courses.map(course => (
          <div className="curso" key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
        <div className="curso" key="python-course">
          <h3>Curso de Python</h3>
          <p>Aprende Python desde lo básico hasta lo avanzado.</p>
          <Link to="/python" className="btn btn-primary">Ver Curso</Link> {/* Enlace al curso de Python */}
        </div>
      </div>
    </section>
  );
};

export default ListaCursos;
