const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config/configuracion'); // Cambiar la importación

const mainRoutes = require('./rutas/RutasMain');
const courseRoutes = require('./rutas/RutasCurso');
const authRoutes = require('./rutas/authRoutes'); // Nueva línea

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api', mainRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/auth', authRoutes); 
mongoose.connect(config.dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('Conectado a la base de datos');
})
.catch((err) => console.log('Error al conectar a la base de datos', err));

const PORT = config.port || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
