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

//No es recomendado 
let miVariable:any;
miVariable = 5;
miVariable = 'hola';
miVariable = true;

const PI = 3.14;
console.log("PI: ", PI);

let persona:any = {
    nombre: 'Luis',
    curso: 'Angular'
}

const PERSONA:any = {
    nombre: 'Luis',
    curso: 'Angular'
}


console.log('PERSONA', PERSONA);

//Mutacion del objeto si se puede
PERSONA.nombre = 'Juan';
PERSONA.curso = 'AngularJS';

console.log('PERSONA', PERSONA);

function holaMundo():string {
    return 'Hola mundo';
}

function saludar(mensaje:string): void {
    console.log('Saludo: ', mensaje);
}

saludar('Me gusta TypeScript');