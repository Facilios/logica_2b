const ler = require("prompt-sync")()

let a = Number(ler("Digite o valor de A: ")) 
let b = Number(ler("Digite o valor de b: "))
let c = Number(ler("Digite o valor de c: "))

let areaTriangulo = (a * c) / 2
let areaCirculo = 3.14159 * (c * c)
let areaTrapezio = ((a + b) * c) / 2
let areaQuadrado = b * b
let areaReangulo = a * b

console.log(`TRIANGULO ${areaTriangulo.toFixed(3)}`);
console.log(`CIRCULO ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO ${areaReangulo.toFixed(3)}`);