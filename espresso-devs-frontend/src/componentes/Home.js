// componentes/Home.js
import React from 'react';
import './Home.css';
import Banner from './Banner';
import ListaCursos from './ListaCursos';

const Home = ({ banner, courses }) => {
  return (
    <div className="home">
      <Banner message={banner.message} buttonText={banner.buttonText} />
      <div className="home-content">
        <h2>Explora Nuestros Cursos</h2>
        <ListaCursos courses={courses} />
      </div>
    </div>
  );
};

export default Home;
