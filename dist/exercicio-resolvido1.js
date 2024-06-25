"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculadora {
    numero1;
    numero2;
    constructor(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    soma() {
        return this.numero1 + this.numero2;
    }
    subtracao() {
        return this.numero1 - this.numero2;
    }
    multiplicacao() {
        return this.numero1 * this.numero2;
    }
    divisao() {
        return this.numero1 / this.numero2;
    }
}
const calculadora = new Calculadora(3, 6);
console.log(calculadora.soma());
console.log(calculadora.subtracao());
console.log(calculadora.multiplicacao());
console.log(calculadora.divisao());
