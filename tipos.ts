// boolean
const contaPaga: boolean = false;

// number
const idade: number = 23;
const avaliacao: number = 4.5;

// string
const nome: string= 'vitor farias';

// array
const idades:number[] = [23,28,45];
const idades2: Array<number> = [23, 345, 456, 46];

// tuple
let jogadores: [string, number, boolean];
jogadores = ['vitor', 3,  true];

// enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado

// Any
const retornoDaAPI: any[]= ['vitor', false];
const retornoDaAPI2: any = {
    //......
}

// Void
function printarNaTela(msg: string): void {
    console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// object
function criar(objecto: object){
    //...
}
// criar('vitor') // Dá erro.

// Never
function loopInfinito(): never{
    while(true) { }
}

function erro(mensagem: string): never {
    throw new Error(mensagem);
}

function falha() {
    return erro('algo falhou');
}

// Union types
const nota: string | number = 5
function exibirNota(nota: number | string) {
    console.log('A nota é ${nota}');
}

exibirNota('10');
exibirNota(10);

// Alias
type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

//type Funcionarios = Array<string>
const funcionarios: Funcionario[]= [{
    nome: 'vitor',
    sobrenome: 'farias',
    dataNascimento: new Date()
}, {
    nome: 'vitor1',
    sobrenome: 'farias1',
    dataNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Funcionario[]) {
    for(let funcionario of funcionarios) {
        console.log('Nome do funcionario: ',funcionario.nome);
    }
}

// Nulos ou opcionais
let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string;
    fone1: string;
    fone2?: string; // operador ? informa que pode null ou opcional
}

const Contato: Contato = {
    nome: 'vitor',
    fone1: '12132132',
    // fone2: null ou opcional
}

// Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString;   // 1o forma de declarar
(<number>minhaIdade).toString      // 2o forma de declarar 

//const input = document.getElementById('numero1') as HTMLInputElement; // 1o forma de declarar
const input = <HTMLInputElement>document.getElementById('numero1');     // 2o forma de declarar
console.log(input.value);