const express = require('express');
const router = express.Router();
const { getCourses } = require('../controladores/ControladorCursos');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/', authenticateToken, getCourses);

module.exports = router;
