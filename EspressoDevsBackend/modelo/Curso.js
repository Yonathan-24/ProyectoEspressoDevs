// models/Course.js

const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, required: true },
  format: { type: String, required: true },
});

module.exports = mongoose.model('Course', courseSchema);