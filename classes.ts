class Data{
    public dia: number;
    private mes: number;
    ano: number;

//  constructor (public dia: number, private mes: number, public ano: number=1970) { // modelo direto já com as definições
    constructor (dia: number, mes: number, ano: number=1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const data = new Data(1,1,2020)
console.log(data.dia);

const data2= new Data(1,1)  // pegando o ano padrao de 1970

class Carro{
    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velociadadeMaxima: number = 220
    ) {}

    private alterarVelocidade(delta: number){
        const novaVelocidade = this.velocidadeAtual + delta;

        if (novaVelocidade >=0 && novaVelocidade <= this.velociadadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
            } else {
                this.velocidadeAtual = delta > 0 ? this.velociadadeMaxima : 0
            }
    }

    acelerar(){
        this.alterarVelocidade(5)
    }

    frear(){
        this.alterarVelocidade(-5)
    }
}

const carro = new Carro('Chevrolet', 'Prisma', 250);
carro.acelerar();
carro.frear();

// Herança
class Camaro extends Carro{
    private turbo = false;

    constructor(){
        super('chevrolet', 'camaro', 500);
    }

    ligarTurbo(){
        this.turbo = true;
    }
}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();