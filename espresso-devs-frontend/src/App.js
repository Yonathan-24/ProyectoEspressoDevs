// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './componentes/Navbar';
import Login from './componentes/Login';
import Register from './componentes/Register'; // Importa el componente Register
import Contact from './pages/Contact';
import ListaCursos from './componentes/ListaCursos';
import Home from './componentes/Home';
import Python from './componentes/Python';

const App = () => {
  const [data, setData] = useState({ banner: {}, courses: [] });

  useEffect(() => {
    axios.get('http://localhost:5000/api')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos del backend:', error);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home banner={data.banner} courses={data.courses} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> {/* Nueva ruta de registro */}
          <Route path="/courses" element={<ListaCursos courses={data.courses} />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/python/*" element={<Python />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
