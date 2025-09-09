export default class Cl_Fundacion {
    constructor(){
        this.acTotalDolaresPP = 0;
        this.acTotalBolivaresPP = 0;
        this.mayorAporte = 0;
        this.mayorNombre = "";
    }

    procesarDonante(don){
        this.acTotalDolaresPP += don.totalDolares();
        
        this.acTotalBolivaresPP += don.totalBolivares();

        if(don.totalBolivares() > this.mayorAporte){
            this.mayorAporte = don.totalBolivares();
            this.mayorNombre = don.nombre;
        }
    }

    totalFinalDolares(){
        return this.acTotalDolares;
    }

    totalFinalBolivares(){
        return this.acTotalBolivares;
    }

    mayorDonante(){
        return this.mayorNombre;
    }
}