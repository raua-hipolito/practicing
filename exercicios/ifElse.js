const input = require("readline-sync");

// let number = 13;
let number = Number(input.question("Digite um numero: "));


if (number % 2 === 0) {
    console.log("Número é par");

} else {
    console.log("Número é impar ");

}