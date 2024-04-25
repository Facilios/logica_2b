const ler = require("prompt-sync")()

let cod1 = Number(ler("digite o codigo do primeiro item: "))
let cod2 = Number(ler("digite o codigo do segundo item: "))

let qnt1 = Number(ler("digite a primeira quantidade de itens: "))
let valor1 = Number(ler("digite o valor do primeiro item: "))

let valor2 = Number(ler("digite o valor do segundo item: "))
let qnt2 = Number(ler("digite a segunda quantidade de itens: "))

let soma = (qnt1 * valor1) + (qnt2 * valor2)
console.log(`VALOR A PAGAR: R$ ${soma}`);