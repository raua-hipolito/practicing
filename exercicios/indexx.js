const input = require("readline-sync");

// let nome = "Rauã";
// let data = 2003;
// let ano = 2026;

// function CalculaIdade(anoAtual, dataNascimento) {
//   return anoAtual - dataNascimento;
// }

// const resultado = CalculaIdade(ano, data);

// if (resultado >= 18) {
//   console.log("Pode votar!");
// } else {
//   console.log("Não pode votar!");
// }

// // ------------------------------

// let numero = 0;

// function parOuImpar(valor) {
//   if (valor % 2 == 0) {
//     return "Par";
//   } else {
//     return "Impar";
//   }
// }

// numero = Number(input.question(`Digite um número: `));

// const result = `O número ${numero} é ${parOuImpar(numero)}.`;
// console.log(result);

// // ------------------------------

let temperatura = 24;

if (temperatura >= 25) {
  console.log("Está quente!");
} else;

// // ------------------------------

let numero = 10;
let status;
if (numero >= 10) {
  status = "O número é maior ou igual a 10";
} else {
  status = "O número é menor que 10";
}
console.log(status);

// // ------------------------------

let age = 17;
let category;

if (age >= 18) {
  category = "Maior de idade";
} else {
  category = "Menor de idade";
}

console.log(category);
// // ------------------------------

let GrausCelsius = 25;
let clima;

if (GrausCelsius >= 25) {
  clima = "Quente";
} else if (GrausCelsius >= 20) {
  clima = "Normal";
} else {
  clima = "Frio";
}

console.log(clima);

// // ------------------------------

let saldo = 10;
let situacao;
if (saldo >= 0) {
  situacao = "Você tem dinheiro na conta";
} else {
  situacao = "Sua conta está negativa";
}
console.log(situacao);

// // ------------------------------
