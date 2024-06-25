"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        this.ligado = !this.ligado;
    }
    acelerar(rpm) {
        this.aceleracao += rpm;
    }
    estadoDoCarro() {
        return this.ligado ? 'O carro está ligado' : 'O carro está desligado';
    }
}
const novoCarro = {
    cor: 'Preto',
    ano: 1970,
    marca: 'Volkswagen',
    modelo: 'Fusca',
    potencia: 120
};
const fusca = new Carro(novoCarro);
console.log(fusca);
fusca.cor = 'Branco';
console.log(fusca);
console.log(fusca.estadoDoCarro());
fusca.ligarOuDesligar();
console.log(fusca.estadoDoCarro());
fusca.acelerar(10);
fusca.acelerar(10);
fusca.acelerar(10);
fusca.acelerar(10);
console.log(fusca);
