"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, velociadadeMaxima) {
        if (velociadadeMaxima === void 0) { velociadadeMaxima = 220; }
        this.marca = marca;
        this.modelo = modelo;
        this.velociadadeMaxima = velociadadeMaxima;
        this.velocidadeAtual = 0;
    }
    Carro.prototype.alterarVelocidade = function (delta) {
        var novaVelocidade = this.velocidadeAtual + delta;
        if (novaVelocidade >= 0 && novaVelocidade <= this.velociadadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velociadadeMaxima : 0;
        }
    };
    Carro.prototype.acelerar = function () {
        this.alterarVelocidade(5);
    };
    Carro.prototype.frear = function () {
        this.alterarVelocidade(-5);
    };
    return Carro;
}());
var carro = new Carro('Chevrolet', 'Prisma', 250);
carro.acelerar();
carro.frear();
// Herança
var Camaro = /** @class */ (function (_super) {
    __extends(Camaro, _super);
    function Camaro() {
        var _this = _super.call(this, 'chevrolet', 'camaro', 500) || this;
        _this.turbo = false;
        return _this;
    }
    Camaro.prototype.ligarTurbo = function () {
        this.turbo = true;
    };
    return Camaro;
}(Carro));
var camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();
