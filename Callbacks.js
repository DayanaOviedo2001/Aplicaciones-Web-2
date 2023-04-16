buscarTransaccion(1, function(resultado) {
    console.log(`Transacción: ${resultado.transaccion.tipo} - Fecha: ${resultado.transaccion.fecha}`);
    console.log(`Instructor: ${resultado.instructor.nombre}`);
    console.log(`Idioma: ${resultado.idioma.nombre}`);
  });