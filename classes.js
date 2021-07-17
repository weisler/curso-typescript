"use strict";
var Data = /** @class */ (function () {
    //  constructor (public dia: number, private mes: number, public ano: number=1970) { // modelo direto já com as definições
    function Data(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
var data = new Data(1, 1, 2020);
console.log(data.dia);
var data2 = new Data(1, 1); // pegando o ano padrao de 1970
