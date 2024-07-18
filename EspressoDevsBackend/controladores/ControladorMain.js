const Course = require('../modelo/Curso');

exports.getMainPage = async (req, res) => {
  try {
    const courses = await Course.find().limit(5);
    res.json({
      banner: {
        message: "Bienvenido a Espresso Devs",
        buttonText: "Comenzar Ahora",
      },
      courses: courses,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error en el servidor');
  }
};
