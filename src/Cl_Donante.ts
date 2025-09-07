export default class Cl_Donante {
    private _nombre: string;
    private _dolares: number;
    private _bolivares: number;

    constructor(nombre: string, dolares: number, bolivares: number){
        this._nombre = nombre;
        this._dolares = dolares; 
        this._bolivares = bolivares;
    }

    set nombre(n: string){
        this._nombre = n;
    }
    get nombre(): string{
        return this._nombre;
    }

    set dolares(d: number){
        this._dolares = +d;
    }
    get dolares(): number{
        return this._dolares;
    }

    set bolivares(b: number){
        this._bolivares = +b;
    }
    get bolivares(): number{
        return this._bolivares;
    }

    convertirDolares(): number{
        return this.dolares * 40;
    }

    convertirBolivares(): number{
        return this.bolivares / 40;
    }

    totalDolares(): number{
        return this.dolares + this.convertirBolivares();
    }

    totalBolivares(): number{
        return this.bolivares + this.convertirDolares();
    }

}