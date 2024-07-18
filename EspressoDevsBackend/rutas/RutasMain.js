const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API de Espresso Devs' });
});

module.exports = router;
