export default class Cl_Fundacion {
    constructor(){
        this.acTotalDolaresPP = 0;
        this.acTotalBolivaresPP = 0;
        this.mayorAporte = 0;
        this.mayorNombre = "";
    }

    procesarDonante(don){
        this.acTotalDolaresPP += don.totalDolaresPP();
        
        this.acTotalBolivaresPP += don.totalBolivaresPP();

        if(don.totalBolivaresPP() > this.mayorAporte){
            this.mayorAporte = don.totalBolivaresPP();
            this.mayorNombre = don.nombre;
        }
    }

    totalFinalDolares(){
        return this.acTotalDolaresPP;
    }

    totalFinalBolivares(){
        return this.acTotalBolivaresPP;
    }

    mayorDonante(){
        return this.mayorNombre;
    }
}