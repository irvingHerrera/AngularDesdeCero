class Animal {

    constructor(protected _nombre:string) {
    }
    
    get nombre(): string{
        return this._nombre;
    }

    set nombre(nombre:string){
        this._nombre = nombre;
    }
}