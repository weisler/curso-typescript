"use strict";
// boolean
var contaPaga = false;
// number
var idade = 23;
var avaliacao = 4.5;
// string
var nome = 'vitor farias';
// array
var idades = [23, 28, 45];
var idades2 = [23, 345, 456, 46];
// tuple
var jogadores;
jogadores = ['vitor', 3, true];
// enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
// Any
var retornoDaAPI = ['vitor', false];
var retornoDaAPI2 = {
//......
};
// Void
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
var u = undefined;
var n = null;
// object
function criar(objecto) {
    //...
}
// criar('vitor') // Dá erro.
// Never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('algo falhou');
}
// Union types
var nota = 5;
function exibirNota(nota) {
    console.log('A nota é ${nota}');
}
exibirNota('10');
exibirNota(10);
//type Funcionarios = Array<string>
var funcionarios = [{
        nome: 'vitor',
        sobrenome: 'farias',
        dataNascimento: new Date()
    }, {
        nome: 'vitor1',
        sobrenome: 'farias1',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionario: ', funcionario.nome);
    }
}
// Nulos ou opcionais
var altura = 1.6;
altura = null;
var Contato = {
    nome: 'vitor',
    fone1: '12132132',
    // fone2: null ou opcional
};
// Type Assertion
var minhaIdade = 23;
minhaIdade.toString; // 1o forma de declarar
minhaIdade.toString; // 2o forma de declarar 
//const input = document.getElementById('numero1') as HTMLInputElement; // 1o forma de declarar
var input = document.getElementById('numero1'); // 2o forma de declarar
console.log(input.value);
