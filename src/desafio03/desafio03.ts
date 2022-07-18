const inputValor = document.getElementById("soma") as HTMLInputElement;
const btnAtualizar = document.getElementById(
  "atualizar-saldo"
) as HTMLButtonElement;
const btnLimpar = document.getElementById("limpar-saldo") as HTMLButtonElement;
const divSaldoAtual = document.getElementById("campo-saldo") as HTMLDivElement;

let saldoAtual: number = 0.0;

divSaldoAtual.innerHTML = saldoAtual.toFixed(2);

function atualizarSaldo(): void {
  divSaldoAtual.innerHTML = saldoAtual.toFixed(2);
  inputValor.value = "";
}

function somarSaldo(soma: number): void {
  saldoAtual += soma;
  atualizarSaldo();
}

function limparSaldo(): void {
  saldoAtual = 0.0;
  atualizarSaldo();
}

btnAtualizar?.addEventListener("click", () => {
  if (isNaN(Number.parseFloat(inputValor.value))) {
    throw new TypeError("O valor de depósito deve ser um número.");
  }

  const valorDeposito: number = inputValor
    ? Number.parseFloat(inputValor.value)
    : 0.0;
  somarSaldo(valorDeposito);
});

btnLimpar.addEventListener("click", () => {
  limparSaldo();
});
