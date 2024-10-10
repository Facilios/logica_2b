const ler = require("prompt-sync")()

let primeiro = 0
let segundo = 0
let terceiro = 0
let codigo = 0

while (codigo !== 4) {
    resposta = Number(ler("escolha seu combustível"))
   if (codigo == 1) {
      primeiro++
} Else If (codigo == 2) {
      segundo++
} Else If (codigo == 3) {
      terceiro++
}
}

console.log(`muito obrigado \n  Álcool: ${primeiro} \n  Gasolina: ${segundo} \n  Diesel: ${terceiro} `)
