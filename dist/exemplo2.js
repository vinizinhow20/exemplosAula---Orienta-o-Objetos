"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Abstração
class Carro {
    cor;
    marca;
    modelo;
    ano;
    potencia;
    ligado;
    aceleracao;
    constructor(carro) {
        this.cor = carro.cor;
        this.marca = carro.marca;
        this.modelo = carro.modelo;
        this.ano = carro.ano;
        this.potencia = carro.potencia ?? 90;
        this.ligado = false;
        this.aceleracao = 0;
    }
    ligarOuDesligar() {
        if (this.ligado) {
            this.desacelerar();
            this.ligado = false;
        }
        else {
            this.ligado = true;
        }
    }
    acelerar(rpm) {
        this.aceleracao += rpm;
    }
    estadoDoCarro() {
        return this.ligado ? "O carro está ligado" : "O carro está desligado";
    }
    turboCarro(cv) {
        this.potencia += cv;
    }
    desacelerar() {
        this.aceleracao = 0;
    }
}
const palio = new Carro({
    cor: 'Prata',
    modelo: 'Pálio',
    marca: 'Fiat',
    ano: 2015
});
console.log(palio);
palio.turboCarro(50);
console.log(palio);
console.log(palio.estadoDoCarro());
palio.ligarOuDesligar();
console.log(palio.estadoDoCarro());
palio.acelerar(10);
palio.acelerar(15);
palio.acelerar(20);
console.log(palio);
palio.ligarOuDesligar();
console.log(palio);
