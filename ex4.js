const ler = require("prompt-sync")()

let distancia = Number(ler("Digite a distancia: "))
let litros = Number(ler("informe quantos litros foram gastos: "))
let total = distancia / litros 

console.log(`${total.toFixed(3)} km/l`);
