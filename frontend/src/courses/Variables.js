// Home.js
import React from 'react';

const Variables = () => (
  <div>
    <h2> Variables y Tipos de Datos en Python</h2>
<h3>Variables</h3>
<p>Las variables en Python son contenedores que almacenan datos. No necesitas declarar el tipo
de variable antes de usarla, simplemente asignas un valor y Python se encarga del resto</p>
<p>
  <div className='box'>
x = 10<br />
 # x es una variable que contiene el número 10<br />
nombre = "Ana" <br />
# nombre es una variable que contiene la cadena "Ana"<br />
</div>
</p>
<h2>Tipos de Datos</h2>
<p>Python tiene varios tipos de datos incorporados que puedes usar:
- Números Enteros (int)<br />
Son números sin parte decimal.<br />
edad = 25 # edad es un entero<br />
<h4>Números Flotantes (float)</h4>
Son números con parte decimal.<br />
altura = 1.75 # altura es un número flotante<br />
- <h4>Cadenas de Texto (str)</h4>
Son secuencias de caracteres, encerradas entre comillas simples o dobles.
mensaje = "Hola, mundo" # mensaje es una cadena de texto
<h4> Booleanos (bool)</h4>
Son valores que pueden ser True (verdadero) o False (falso).
es_estudiante = True # es_estudiante es un valor booleano</p>
<h4>Conversiones de Tipo</h4>
<p>Puedes convertir entre tipos de datos usando funciones de conversión.
</p>
  </div>
);

export default Variables;
