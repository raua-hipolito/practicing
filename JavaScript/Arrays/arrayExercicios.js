const input = require("readline-sync");

const frutas = ["banana", "maça", "uva", "acerola", "manga"];

// console.log(frutas[0]);
// console.log(frutas[frutas.length - 1]);

// ======================================================================================//===================================================================

const nomePessoas = ["Rauã", "Lucas", "Marcos", "Kaue"];

// console.log(`O array possui ${nomePessoas.length} elementos.`);

// ======================================================================================//===================================================================

const cores = ["azul", "preto", "rosa", "cinza"];

// console.log(`Cor na posição 0: ${cores[0]}`);
// console.log(`Cor na posição 1: ${cores[1]}`);
// console.log(`Cor na posição 2: ${cores[2]}`);
// console.log(`Cor na posição 3: ${cores[3]}`);

for (let i = 0; i < cores.length; i++) {
  console.log(`Cor na posição ${i}: ${cores[i]}`);
}

// ======================================================================================//===================================================================

const arrayVazio = [];

arrayVazio.push(1, 2, 3);

console.log(arrayVazio);

// ======================================================================================//===================================================================

const fiveNumber = [1, 2, 3, 4, 5];

console.log(fiveNumber);

fiveNumber.pop();

console.log(fiveNumber);

// ======================================================================================//===================================================================

const cidades = ["Barcarena", "Floripa", "rio", "Aracaju"];

const verificaCidade = input.question("Digite uma cidade: ").toLowerCase();

if (cidades.includes(verificaCidade)) {
  console.log("Cidade encontrada");
} else {
  console.log("Cidade não encontrada");
}

// ======================================================================================//===================================================================

const numeros = [22, 45, 10, 94];
let maiorNumero = numeros[0];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > maiorNumero) {
    maiorNumero = numeros[i];
  }
}
console.log(maiorNumero);

// ======================================================================================//===================================================================

const notasAlunos = [10, 4, 7, 8, 3];

let aprovados = 0;

for (let i = 0; i < notasAlunos.length; i++) {
  if (notasAlunos[i] >= 7) {
    aprovados++;
  }
}
console.log(`Quantidade de aprovados: ${aprovados}`);
