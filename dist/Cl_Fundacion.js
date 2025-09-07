export default class Cl_Fundacion {
    constructor(){
        this.acTotalDolares = 0;
        this.acTotalBolivares = 0;
        this.mayorAporte = 0;
        this.mayorNombre = "";
    }

    procesarDonante(don){
        this.acTotalDolares += don.totalDolares();
        
        this.acTotalBolivares += don.totalBolivares();

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