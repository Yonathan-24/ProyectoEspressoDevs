
import React from 'react';
import './Course.css';

const Courses = () => (
  <section id="cursos">
    <div className="content">
      <h2>Nuestros Cursos</h2>
      <div className="courses">
        <div className="course">
          <h3>Curso de HTML & CSS</h3>
          <p>Aprende los fundamentos del desarrollo web con HTML y CSS.</p>
        </div>
        <div className="course">
          <h3>Curso de JavaScript</h3>
          <p>Domina el lenguaje de programación más popular para desarrollo web.</p>
        </div>
        <div className="course">
          <h3>Curso de React</h3>
          <p>Desarrolla aplicaciones web modernas con React.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Courses;

