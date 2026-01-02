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

let numero = 0;

function parOuImpar(valor) {
  if (valor % 2 == 0) {
    return "Par";
  } else {
    return "Impar";
  }
}

numero = Number(input.question(`Digite um número: `));

const result = `O número ${numero} é ${parOuImpar(numero)}.`;
console.log(result);
