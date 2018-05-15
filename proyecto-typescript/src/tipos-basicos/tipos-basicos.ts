let numeroEstudiantes: number = 40;
console.log('numero de estudiantes: ', numeroEstudiantes);

let cursoIniciado: boolean = true;

let nombreCurso:string = 'Angular dese Cero';
let contenidoCurso:string = `
    Herramientas de Desarrollo
    Introduccion a TypeScript
    Introduccion a Angular
`;

console.log('Nombre curso:', nombreCurso);
console.log('Contenido', contenidoCurso);

let bienvenida:string = `Bienvenidos al curso ${nombreCurso} `;

console.log('Bienvenidos ', bienvenida);

let arregloA: number[] = [1,2,3,4];
console.log('arregloA:', arregloA);

let arregloB: Array<string>;
arregloB = ['a','b','c'];
console.log('arregloB:', arregloB);

// TypeScript Enums
enum DiaCurso {MARTES, VIERNES};
enum DiasSemana {LUNES, MARTES, MIERCOLES, JUEVES, VIERNES};

let primerDia: DiaCurso;
primerDia = DiaCurso.MARTES;
console.log('Primer dia:', primerDia);
console.log('Primer dia (string):', DiaCurso[primerDia]);