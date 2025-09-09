import Cl_Donante from "./Cl_Donante";

export default class Cl_Fundacion {
    private acTotalDolaresPP: number = 0;
    private acTotalBolivaresPP: number = 0;
    private mayorAporte: number = 0;
    private mayorNombre: string = "";
    constructor(){}

    procesarDonante(don: Cl_Donante): void{
        this.acTotalDolaresPP += don.totalDolaresPP();

        this.acTotalBolivaresPP += don.totalBolivaresPP();

        if(don.totalDolaresPP() > this.mayorAporte){
            this.mayorAporte = don.totalDolaresPP();
            this.mayorNombre = don.nombre;
        }
    }

    totalFinalDolares(): number{
        return this.acTotalDolaresPP;
    }

    totalFinalBolivares(): number{
        return this.acTotalBolivaresPP;
    }

    mayorDonante(): string{
        return this.mayorNombre;
    }
}