const { model, Schema } = require('mongoose');

const IdiomaSchema = Schema(
  {
    descripcion: {
      type: String,
      required: [true, 'La descripción del idioma es necesaria'],
      unique: true,
    },
  }
);

const InstructorSchema = Schema(
  {
    nombre: {
      type: String,
      required: [true, 'El nombre del instructor es necesario'],
    },
    fechaNacimiento: {
      type: Date,
      required: [true, 'La fecha de nacimiento del instructor es necesaria'],
    },
    experiencia: {
      type: Number,
      required: [true, 'La experiencia del instructor es necesaria'],
    },
  }
);

const AprendizajeSchema = Schema(
  {
    idioma: {
      type: Schema.Types.ObjectId,
      ref: 'Idioma',
      required: true,
    },
    instructor: {
      type: Schema.Types.ObjectId,
      ref: 'Instructor',
      required: true,
    },
    fecha: {
      type: Date,
      required: [true, 'La fecha del aprendizaje es necesaria'],
    },
    hora: {
      type: String,
      required: [true, 'La hora del aprendizaje es necesaria'],
    },
    numeroHoras: {
      type: Number,
      required: [true, 'El número de horas del curso es necesario'],
    },
    nivel: {
      type: String,
      required: [true, 'El nivel del aprendizaje es necesario'],
    },
  }
);

module.exports = {
  Idioma: model('Idioma', IdiomaSchema),
  Instructor: model('Instructor', InstructorSchema),
  Aprendizaje: model('Aprendizaje', AprendizajeSchema),
};
