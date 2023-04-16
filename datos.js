const idiomas = [
    { id: 1, nombre: "Inglés" },
    { id: 2, nombre: "Español" },
    { id: 3, nombre: "Francés" },
    { id: 4, nombre: "Alemán" },
    { id: 5, nombre: "Italiano" },
  ];
  
  const instructores = [
    { id: 1, nombre: "Juan Pérez", idioma_id: 1 },
    { id: 2, nombre: "María Gómez", idioma_id: 2 },
    { id: 3, nombre: "Carlos Sánchez", idioma_id: 1 },
    { id: 4, nombre: "Ana Ramírez", idioma_id: 3 },
    { id: 5, nombre: "Pedro Castro", idioma_id: 2 },
  ];

  const { idiomas, instructores } = require("./datos");

function buscarTransaccion(idTransaccion, callback) {
  const transacciones = [
    { id: 1, tipo: "Matrícula", fecha: "2022-01-01", instructor_id: 1 },
    { id: 2, tipo: "Compra", fecha: "2022-02-15", instructor_id: 3 },
    { id: 3, tipo: "Matrícula", fecha: "2022-03-10", instructor_id: 2 },
    { id: 4, tipo: "Compra", fecha: "2022-04-20", instructor_id: 5 },
    { id: 5, tipo: "Matrícula", fecha: "2022-05-05", instructor_id: 4 },
  ];
  const transaccion = transacciones.find((t) => t.id === idTransaccion);
  const instructor = instructores.find((i) => i.id === transaccion.instructor_id);
  const idioma = idiomas.find((idi) => idi.id === instructor.idioma_id);
  callback({
    transaccion: transaccion,
    instructor: instructor,
    idioma: idioma,
  });
}

  
  module.exports = { idiomas, instructores };
  