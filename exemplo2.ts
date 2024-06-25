type TCarro = {
  cor: string;
  marca: string;
  modelo: string;
  ano: number;
  potencia?: number;
};

// Abstração
class Carro {
  public cor: string;
  private marca: string;
  private modelo: string;
  private ano: number;
  private potencia: number;

  private ligado: boolean;
  private aceleracao: number;

  constructor(carro: TCarro) {
    this.cor = carro.cor;
    this.marca = carro.marca;
    this.modelo = carro.modelo;
    this.ano = carro.ano;
    this.potencia = carro.potencia ?? 90;
    this.ligado = false;
    this.aceleracao = 0;
  }

  public ligarOuDesligar(): void {
    if(this.ligado){
        this.desacelerar()
        this.ligado = false 
    } else {
    this.ligado = true 
    }
  }

  public acelerar(rpm: number): void {
    this.aceleracao += rpm;
  }

  estadoDoCarro(): string {
    return this.ligado ? "O carro está ligado" : "O carro está desligado";
  }

  public turboCarro(cv: number) {
    this.potencia += cv 
  }

  private desacelerar() {
    this.aceleracao = 0
    }
}

const palio = new Carro({
    cor: 'Prata',
    modelo: 'Pálio',
    marca: 'Fiat',
    ano: 2015
})

console.log(palio)

palio.turboCarro(50)

console.log(palio)
console.log(palio.estadoDoCarro())
palio.ligarOuDesligar()
console.log(palio.estadoDoCarro())
palio.acelerar(10)
palio.acelerar(15)
palio.acelerar(20)
console.log(palio)
palio.ligarOuDesligar()
console.log(palio)





