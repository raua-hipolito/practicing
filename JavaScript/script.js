// Verifica se é vogal ou consoante

const input = require("readline-sync");

// const vogais = ["a", "e", "i", "o", "u"];

// let inputTest = input.question("Digite uma letra: ").toLowerCase();

// function verificaVogais() {
//   if (vogais.includes(inputTest)) {
//     console.log("É uma vogal");
//   } else {
//     console.log("É uma consoante");
//   }
// }

// verificaVogais();

// // ------------------------------

// 2. Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:

//     A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//     A mensagem "Reprovado", se a média for menor do que sete;
//     A mensagem "Aprovado com Distinção", se a média for igual a dez.

// let nota1 = Number(input.question("Digite sua primeira nota: "));
// let nota2 = Number(input.question("Digite sua segunda nota: "));

// let media = (nota1 + nota2) / 2;

// if (media === 10) {
//   console.log("Aprovado com Distinção");
// } else if (media >= 7) {
//   console.log("Aprovado");
// } else {
//   console.log("Reprovado");
// }

// ------------------------------

let senha = Number(input.question("Digite sua senha: "));

if (senha == 1234) {
  console.log("Acesso permitido");
} else {
  console.log("Acesso negado");
}
