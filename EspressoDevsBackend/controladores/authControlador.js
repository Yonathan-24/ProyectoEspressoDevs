// backend/controllers/authController.js
exports.login = (req, res) => {
    const { email, password } = req.body;
    // Lógica para manejar la autenticación
    if (email === 'admin@admin.com' && password === 'password') {
      res.status(200).send('Login exitoso');
    } else {
      res.status(401).send('Credenciales incorrectas');
    }
  };
  