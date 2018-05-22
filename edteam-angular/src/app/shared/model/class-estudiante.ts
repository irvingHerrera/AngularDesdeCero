export class ClassEstudiante {

    constructor(public id:number,
        public nombre:string,
        public cuidad: string,
        public fotoURL?: string){
        
    }

    getEdad(): number{
        return 0;
    }
}
