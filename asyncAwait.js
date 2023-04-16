async function buscarTransaccionAsync(idTransaccion) {
    try {
      const resultado = await buscarTransaccionPromesa(idTransaccion);
      console.log(`Transacción: ${resultado.transaccion.tipo} - Fecha: ${resultado.transaccion.fecha}`);
      console.log(`Instructor: ${resultado.instructor.nombre}`);
      console.log(`Idioma: ${resultado.idioma.nombre}`);
    } catch (error) {
      console.log(error);
    }
  }
  
  buscarTransaccionAsync(3);
  