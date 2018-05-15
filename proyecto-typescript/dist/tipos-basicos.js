"use strict";
var numeroEstudiantes = 40;
console.log('numero de estudiantes: ', numeroEstudiantes);
var cursoIniciado = true;
var nombreCurso = 'Angular dese Cero';
var contenidoCurso = "\n    Herramientas de Desarrollo\n    Introduccion a TypeScript\n    Introduccion a Angular\n";
console.log('Nombre curso:', nombreCurso);
console.log('Contenido', contenidoCurso);
var bienvenida = "Bienvenidos al curso " + nombreCurso + " ";
console.log('Bienvenidos ', bienvenida);
var arregloA = [1, 2, 3, 4];
console.log('arregloA:', arregloA);
var arregloB;
arregloB = ['a', 'b', 'c'];
console.log('arregloB:', arregloB);
// TypeScript Enums
var DiaCurso;
(function (DiaCurso) {
    DiaCurso[DiaCurso["MARTES"] = 0] = "MARTES";
    DiaCurso[DiaCurso["VIERNES"] = 1] = "VIERNES";
})(DiaCurso || (DiaCurso = {}));
;
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["LUNES"] = 0] = "LUNES";
    DiasSemana[DiasSemana["MARTES"] = 1] = "MARTES";
    DiasSemana[DiasSemana["MIERCOLES"] = 2] = "MIERCOLES";
    DiasSemana[DiasSemana["JUEVES"] = 3] = "JUEVES";
    DiasSemana[DiasSemana["VIERNES"] = 4] = "VIERNES";
})(DiasSemana || (DiasSemana = {}));
;
var primerDia;
primerDia = DiaCurso.MARTES;
console.log('Primer dia:', primerDia);
console.log('Primer dia (string):', DiaCurso[primerDia]);
