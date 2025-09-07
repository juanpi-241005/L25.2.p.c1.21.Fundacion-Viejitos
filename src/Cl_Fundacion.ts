import Cl_Donante from "./Cl_Donante";

export default class Cl_Fundacion {
    private acTotalDolares: number = 0;
    private acTotalBolivares: number = 0;
    private mayorAporte: number = 0;
    private mayorNombre: string = "";
    constructor(){}

    procesarDonante(don: Cl_Donante): void{
        this.acTotalDolares += don.totalDolares();

        this.acTotalBolivares += don.totalBolivares();

        if(don.totalDolares() > this.mayorAporte){
            this.mayorAporte = don.totalDolares();
            this.mayorNombre = don.nombre;
        }
    }

    totalFinalDolares(): number{
        return this.acTotalDolares;
    }

    totalFinalBolivares(): number{
        return this.acTotalBolivares;
    }

    mayorDonante(): string{
        return this.mayorNombre;
    }
}