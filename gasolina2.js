const prompt = require("prompt-sync")();

console.log("Seja bem vindo, banco do Marcinho Fofinho");

let nomeCliente = prompt("Informe seu nome: ");
let numeroConta = prompt("Escolha um número para sua conta (5 dígitos): ");
let saldo = 0;
let movimentacoes = "";

console.log(`
Cadastro concluído!
- Nome: ${nomeCliente}
- Conta: ${numeroConta}
- Saldo: R$ ${saldo.toFixed(2)}
`);

let escolha;
do {
  console.log(`
Menu de Opções:
1 - Consultar Saldo
2 - Ver Histórico
3 - Realizar Retirada
4 - Fazer Depósito
5 - Encerrar
`);
  escolha = Number(prompt("Digite o número da opção desejada: "));

  if (escolha === 1) {
    console.log(`Seu saldo é: R$ ${saldo.toFixed(2)}`);
  } else if (escolha === 2) {
    if (movimentacoes.length > 0) {
      console.log("Histórico de Movimentações:");
      console.log(movimentacoes);
    } else {
      console.log("Nenhuma movimentação encontrada.");
    }
  } else if (escolha === 3) {
    const valorRetirada = Number(prompt("Digite o valor para retirada: "));
    if (valorRetirada > 0 && valorRetirada <= saldo) {
      let novoSaldo = saldo - valorRetirada;
      saldo = novoSaldo;
      let novaMovimentacao = `Retirada de R$ ${valorRetirada.toFixed(2)}\n`;
      movimentacoes = movimentacoes.concat(novaMovimentacao);
      console.log(`Retirada de R$ ${valorRetirada.toFixed(2)} efetuada com sucesso!`);
    } else {
      console.log("Valor inválido ou saldo insuficiente.");
    }
  } else if (escolha === 4) {
    const valorDeposito = Number(prompt("Digite o valor para depósito: "));
    if (valorDeposito > 0) {
      let novoSaldo = saldo + valorDeposito;
      saldo = novoSaldo;
      let novaMovimentacao = `Depósito de R$ ${valorDeposito.toFixed(2)}\n`;
      movimentacoes = movimentacoes.concat(novaMovimentacao);
      console.log(`Depósito de R$ ${valorDeposito.toFixed(2)} realizado com sucesso!`);
    } else {
      console.log("Valor inválido.");
    }
  } else if (escolha === 5) {
    console.log("Sessão encerrada. Obrigado por usar o Banco Galáxia!");
  } else {
    console.log("Opção não reconhecida. Tente novamente.");
  }
} while (escolha !== 5);
