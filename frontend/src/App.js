// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Introduccion from './courses/Introduccion';
import Variables from './courses/Variables';
import Desafio from './courses/Desafio';
import Bucles from './courses/Bucles';
import Diccionarios from './courses/Diccionarios';
import Funciones from './courses/Funciones';
import Operadores from './courses/Operadores';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/introduccion" element={<Introduccion />} />
            <Route path="/variables" element={<Variables />} />
            <Route path="/operadores" element={<Operadores />} />
            <Route path="/desafio" element={<Desafio />} />
            <Route path="/diccionarios" element={<Diccionarios />} />
            <Route path="/funciones" element={<Funciones />} />
            <Route path="/bucles" element={<Bucles />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
