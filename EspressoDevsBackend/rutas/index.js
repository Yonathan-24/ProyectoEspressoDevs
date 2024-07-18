const express = require('express');
const router = express.Router();
const courseController = require('../controladores/ControladorCursos');
const contactController = require('../controladores/ContactControlador');
const authController = require('../controladores/authControlador'); // Importar controlador de autenticación

router.get('/api/courses', courseController.getAllCourses);
router.post('/api/contact', contactController.sendContactMessage);
router.post('/api/login', authController.login); // Nueva ruta de login

module.exports = router;
