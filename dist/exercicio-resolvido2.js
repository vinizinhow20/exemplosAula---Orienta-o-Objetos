"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Lampada {
    potencia;
    estado;
    constructor(watts) {
        this.potencia = watts;
        this.estado = false;
    }
    ligar() {
        this.estado = true;
    }
    ;
    desligar() {
        this.estado = false;
    }
    ;
    medirPotencia() {
        return this.potencia;
    }
    ;
}
const lampadaLed = new Lampada(50);
console.log(lampadaLed);
console.log(lampadaLed.medirPotencia());
lampadaLed.ligar();
console.log(lampadaLed);
lampadaLed.desligar();
console.log(lampadaLed);
