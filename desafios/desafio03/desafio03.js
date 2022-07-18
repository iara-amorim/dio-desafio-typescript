"use strict";
const inputValor = document.getElementById("soma");
const btnAtualizar = document.getElementById("atualizar-saldo");
const btnLimpar = document.getElementById("limpar-saldo");
const divSaldoAtual = document.getElementById("campo-saldo");
let saldoAtual = 0.0;
divSaldoAtual.innerHTML = saldoAtual.toFixed(2);
function atualizarSaldo() {
    divSaldoAtual.innerHTML = saldoAtual.toFixed(2);
    inputValor.value = "";
}
function somarSaldo(soma) {
    saldoAtual += soma;
    atualizarSaldo();
}
function limparSaldo() {
    saldoAtual = 0.0;
    atualizarSaldo();
}
btnAtualizar === null || btnAtualizar === void 0 ? void 0 : btnAtualizar.addEventListener("click", () => {
    if (isNaN(Number.parseFloat(inputValor.value))) {
        throw new TypeError("O valor de depósito deve ser um número.");
    }
    const valorDeposito = inputValor
        ? Number.parseFloat(inputValor.value)
        : 0.0;
    somarSaldo(valorDeposito);
});
btnLimpar.addEventListener("click", () => {
    limparSaldo();
});
//# sourceMappingURL=desafio03.js.map