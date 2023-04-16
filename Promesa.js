function buscarTransaccionPromesa(idTransaccion) {
    return new Promise(function(resolve, reject) {
      buscarTransaccion(idTransaccion, function(resultado) {
        resolve(resultado);
      });
    });
  }
  
  buscarTransaccionPromesa(2)
    .then(function(resultado) {
      console.log(`Transacción: ${resultado.transaccion.tipo} - Fecha: ${resultado.transaccion.fecha}`);
      console.log(`Instructor: ${resultado.instructor.nombre}`);
      console.log(`Idioma: ${resultado.idioma.nombre}`);
    })
    .catch(function(error) {
      console.log(error);
    });
  