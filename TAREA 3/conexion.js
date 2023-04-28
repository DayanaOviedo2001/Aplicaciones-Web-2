const mongoose = require('mongoose');

mongoose.connect(' doviedoinsuasti84:644bf4c82abf575fcb52eac2@cluster0.s3yokim.mongodb.net/idiomas', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB Atlas');
});
const mongoose = require('mongoose');

const idiomaSchema = new mongoose.Schema({
  descripcion: String
});

const instructorSchema = new mongoose.Schema({
  nombre: String,
  fechaNacimiento: Date,
  experiencia: Number
});

const aprendizajeSchema = new mongoose.Schema({
  idioma: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Idioma'
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Instructor'
  },
  fecha: Date,
  hora: String,
  numHoras: Number,
  nivel: String
});

const Idioma = mongoose.model('Idioma', idiomaSchema);
const Instructor = mongoose.model('Instructor', instructorSchema);
const Aprendizaje = mongoose.model('Aprendizaje', aprendizajeSchema);
const Idioma = require('../models/idioma');

exports.getIdiomas = async (req, res) => {
  try {
    const idiomas = await Idioma.find();
    res.status(200).json(idiomas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getIdiomaById = async (req, res) => {
  try {
    const idioma = await Idioma.findById(req.params.id);
    if (!idioma) {
      return res.status(404).json({ message: 'Idioma no encontrado' });
    }
    res.status(200).json(idioma);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createIdioma = async (req, res) => {
  const idioma = new Idioma({
    descripcion: req.body.descripcion
  });

  try {
    const newIdioma = await idioma.save();
    res.status(201).json(newIdioma);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports
