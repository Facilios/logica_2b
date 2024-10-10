const ler = require("prompt-sync")()

let alcool = 0
let gasolina = 0
let diesel = 0
let resposta = 0

while (resposta !== 4) {
    resposta = Number(ler("escolha seu combustível"))
   if (resposta == 1) {
      alcool++
} Else If (resposta == 2) {
      gasolina++
} Else If (resposta == 3) {
      diesel++
}
}

console.log(`muito obrigado \n  Álcool: ${alcool} \n  Gasolina: ${gasolina} \n  Diesel: ${diesel} `)
