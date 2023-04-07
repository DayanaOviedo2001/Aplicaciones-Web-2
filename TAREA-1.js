// Definir objeto Idioma
function Idioma(id, descripcion) {
this.id = id;
this.descripcion = descripcion;
this.cursos = [];
}

// Definir objeto Instructor
function Instructor(id, nombre, fechaNacimiento, experiencia) {
this.id = id;
this.nombre = nombre;
this.fechaNacimiento = fechaNacimiento;
this.experiencia = experiencia;
this.cursos = [];
}

// Definir objeto Aprendizaje
class Aprendizaje {
    constructor(id, idioma, instructor, fecha, hora, numHoras, nivel) {
        this.id = id;
        this.idioma = idioma;
        this.instructor = instructor;
        this.fecha = fecha;
        this.hora = hora;
        this.numHoras = numHoras;
        this.nivel = nivel;
    }
}

// Crear 5 objetos Idioma
let idioma1 = new Idioma(1, "Inglés");
let idioma2 = new Idioma(2, "Francés");
let idioma3 = new Idioma(3, "Alemán");
let idioma4 = new Idioma(4, "Italiano");
let idioma5 = new Idioma(5, "Español");

// Crear 5 objetos Instructor
let instructor1 = new Instructor(1, "John Smith", "12/05/1980", 10);
let instructor2 = new Instructor(2, "Marie Dupont", "07/12/1975", 8);
let instructor3 = new Instructor(3, "Hans Müller", "25/09/1985", 12);
let instructor4 = new Instructor(4, "Paolo Rossi", "30/06/1990", 5);
let instructor5 = new Instructor(5, "Pedro García", "18/02/1988", 7);

// Crear 5 objetos Aprendizaje
let aprendizaje1 = new Aprendizaje(1, idioma1, instructor1, "15/04/2023", "09:00", 20, "Intermedio");
let aprendizaje2 = new Aprendizaje(2, idioma2, instructor2, "20/04/2023", "14:00", 15, "Básico");
let aprendizaje3 = new Aprendizaje(3, idioma3, instructor3, "22/04/2023", "10:00", 25, "Avanzado");
let aprendizaje4 = new Aprendizaje(4, idioma4, instructor4, "25/04/2023", "16:00", 30, "Intermedio");
let aprendizaje5 = new Aprendizaje(5, idioma5, instructor5, "28/04/2023", "11:00", 10, "Básico");
// Agregar cursos a los arreglos de idiomas e instructores
idioma1.cursos = [aprendizaje1];
idioma2.cursos = [aprendizaje2];
idioma3.cursos = [aprendizaje3];
idioma4.cursos = [aprendizaje4];
idioma5.cursos = [aprendizaje5];

instructor1.cursos = [aprendizaje1];
instructor2.cursos = [aprendizaje2];
instructor3.cursos = [aprendizaje3];
instructor4.cursos = [aprendizaje4];
instructor5.cursos = [aprendizaje5];

// Recorrido con for loop
console.log("Recorrido con for loop:");
for (let i = 0; i < idiomas.length; i++) {
  console.log(`Idioma: ${idiomas[i].descripcion}`);
  for (let j = 0; j < idiomas[i].cursos.length; j++) {
    console.log(`Curso ${idiomas[i].cursos[j].id}:`);
    console.log(`Instructor: ${idiomas[i].cursos[j].instructor.nombre}`);
    console.log(`Fecha: ${idiomas[i].cursos[j].fecha}`);
    console.log(`Hora: ${idiomas[i].cursos[j].hora}`);
    console.log(`Número de horas: ${idiomas[i].cursos[j].numHoras}`);
    console.log(`Nivel: ${idiomas[i].cursos[j].nivel}`);
  }
}

// Recorrido con for...of loop
console.log("Recorrido con for...of loop:");
for (let idioma of idiomas) {
  console.log(`Idioma: ${idioma.descripcion}`);
  for (let curso of idioma.cursos) {
    console.log(`Curso ${curso.id}:`);
    console.log(`Instructor: ${curso.instructor.nombre}`);
    console.log(`Fecha: ${curso.fecha}`);
    console.log(`Hora: ${curso.hora}`);
    console.log(`Número de horas: ${curso.numHoras}`);
    console.log(`Nivel: ${curso.nivel}`);
  }
}

// Recorrido con forEach()
console.log("Recorrido con forEach():");
idiomas.forEach(function(idioma) {
  console.log(`Idioma: ${idioma.descripcion}`);
  idioma.cursos.forEach(function(curso) {
    console.log(`Curso ${curso.id}:`);
    console.log(`Instructor: ${curso.instructor.nombre}`);
    console.log(`Fecha: ${curso.fecha}`);
    console.log(`Hora: ${curso.hora}`);
    console.log(`Número de horas: ${curso.numHoras}`);
    console.log(`Nivel: ${curso.nivel}`);
  });
});


