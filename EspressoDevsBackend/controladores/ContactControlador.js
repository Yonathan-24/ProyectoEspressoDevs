// backend/controllers/contactController.js
exports.sendContactMessage = (req, res) => {
    const { name, email, message } = req.body;
    // Lógica para manejar el mensaje de contacto
    console.log(`Nombre: ${name}, Email: ${email}, Mensaje: ${message}`);
    res.status(200).send('Mensaje enviado');
  };
  