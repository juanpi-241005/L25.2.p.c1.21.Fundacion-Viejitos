export default class Cl_Donante {
    constructor(nombre, dolares, bolivares){
        this._nombre = nombre;
        this._dolares = dolares;
        this._bolivares = bolivares;
    }

    set nombre(n){
        this._nombre = n;
    }
    get nombre(){
        return this._nombre;
    }

    set dolares(d){
        this._dolares = +d;
    }
    get dolares(){
        return this._dolares;
    }

    set bolivares(b){
        this._bolivares = +b;
    }
    get bolivares(){
        return this._bolivares;
    }

    convertirDolares(){
        return this.dolares * 40;
    }

    convertirBolivares(){
        return this.bolivares / 40;
    }

    totalDolaresPP(){
        return this.dolares + this.convertirBolivares();
    }

    totalBolivaresPP(){
        return this.bolivares + this.convertirDolares();
    }
}