/*20. FUNDACIÓN VIEJITOS

La Fundación Viejitos tiene cierta cantidad de dólares y bolívares, y también se sabe la tasa
de cambio. Los donantes traen dólares y bolívares. Se desea saber cuánto total aporta cada
uno, en dólares y bolívares, y también cuánto es el total final en dólares y bolívares, y quién fue
el mejor donador.

Si tomamos una tasa de cambio de $40 por dólar, y los donantes fuesen Sofía con $10 y
Bs.80, Mateo con Bs.600, Elena con $50, y David con $20 y Bs.100, entonces tendríamos el
siguiente resultado:

Sofía aporta $12.00 (Bs.480)
Mateo aporta $15.00 (Bs.600)
Elena aporta $50.00 (Bs.2000)
David aporta $22.50 (Bs.900)
En total se recaudaron $99.50 (Bs.3980)
El mejor donador fue Elena*/

import Cl_Donante from "./Cl_Donante.js";
import Cl_Fundacion from "./Cl_Fundacion.js";

let donante1 = new Cl_Donante("Sofía", 10, 80);
let donante2 = new Cl_Donante("Mateo", 0, 600);
let donante3 = new Cl_Donante("Elena", 50, 0);
let donante4 = new Cl_Donante("David", 20, 100);
let fundacion = new Cl_Fundacion();

fundacion.procesarDonante(donante1);
fundacion.procesarDonante(donante2);
fundacion.procesarDonante(donante3);
fundacion.procesarDonante(donante4);

let salida = document.getElementById("salida");
if(salida){
    salida.innerHTML += `<p>${donante1.nombre} aporta $${donante1.totalDolaresPP().toFixed(2)} (Bs.${donante1.totalBolivaresPP()})</p>`;
    salida.innerHTML += `<p>${donante2.nombre} aporta $${donante2.totalDolaresPP().toFixed(2)} (Bs.${donante2.totalBolivaresPP()})</p>`;
    salida.innerHTML += `<p>${donante3.nombre} aporta $${donante3.totalDolaresPP().toFixed(2)} (Bs.${donante3.totalBolivaresPP()})</p>`;
    salida.innerHTML += `<p>${donante4.nombre} aporta $${donante4.totalDolaresPP().toFixed(2)} (Bs.${donante4.totalBolivaresPP()})</p>`;
    salida.innerHTML += `<p>En total se recaudaron $${fundacion.totalFinalDolares().toFixed(2)} (Bs.${fundacion.totalFinalBolivares()})</p>`;
    salida.innerHTML += `<p>El mejor donador fue ${fundacion.mayorDonante()}</p>`;
}
else {
    console.log("No se encontró el elemento con el id 'salida'");
}