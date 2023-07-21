"use strict";
//creo una classe che implementa la mia interfaccia
class SmartphoneX {
    constructor(carica, numerochiamate = 0, costoMinuto = 0.20) {
        this.carica = carica;
        this.numerochiamate = numerochiamate;
        this.costoMinuto = costoMinuto;
    }
    ricarica(euro) {
        this.carica = this.carica + euro;
    }
    numero404() {
        return `${this.carica} £`;
    }
    getNumeroChiamate() {
        return this.numerochiamate;
    }
    chiamata(min) {
        if (this.carica > 0) {
            this.carica = this.carica - (min * this.costoMinuto);
            this.numerochiamate = this.numerochiamate + 1;
        }
        else {
            console.log('non hai credito,vai al bar e fai la ricarica');
        }
    }
    azzeraChiamate() {
        this.numerochiamate = 0;
    }
}
//creo 3 istanze x,y,z e verifico che funziona
let x = new SmartphoneX(5);
x.ricarica(10);
console.log(x.numero404());
let y = new SmartphoneX(0);
y.chiamata(10);
console.log(y.numero404());
let z = new SmartphoneX(20);
