const input = require("readline-sync");

// let number = 13;
// let number = Number(input.question("Digite um numero: "));


// if (number % 2 === 0) {
//     console.log("Número é par");

// } else {
//     console.log("Número é impar ");

// }

// ===============================================================================================================================

// let numero = Number(input.question('digite um número: '));

// if (numero === 0) {
//     console.log('Número zero!');
// }
// else if (numero > 0) {
//     console.log('Número positivo!');
// }
// else {
//     console.log('Número negativo');
// }

// ===============================================================================================================================

let idade = 17;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
    console.log("Pode dirigir");
}
else {
    console.log("Não pode dirigir");
};