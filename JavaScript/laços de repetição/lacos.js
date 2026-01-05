// let frutas = [
//   "Maçã",
//   "Banana",
//   "Laranja",
//   "Uva",
//   "Manga",
//   "Abacaxi",
//   "Melancia",
//   "Morango",
//   "Pera",
//   "Kiwi",
// ];

// for (let frutas1 = 0; frutas1 < frutas.length; frutas1++) {
//   const element = frutas[frutas1];
//   console.log(element);
// }

const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 7.0 },
  { nome: "Carlos", nota: 9.2 },
  { nome: "Daniela", nota: 6.8 },
  { nome: "Eduardo", nota: 8.0 },
  { nome: "Fernanda", nota: 9.5 },
  { nome: "Gabriel", nota: 7.8 },
  { nome: "Helena", nota: 8.9 },
  { nome: "Igor", nota: 6.5 },
  { nome: "Juliana", nota: 9.0 },
];

for (let i = 0; i < alunos.length; i++) {
  const element = alunos[i];
  console.log("-------------------");
  console.log(`Aluno: ${alunos[i].nome} nota: ${alunos[i].nota}`);

  if (element.nota >= 7) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }
}

// // ------------------------------

let contador = 1;

while (contador <= 5) {
  console.log("Contagem: " + contador);
  contador++;
}

// // ------------------------------

for (let index = 1; index <= 10; index++) {
  if (index % 2 !== 0) {
    console.log(index);
  }
}

// // ------------------------------

let count = 0;

for (let i = 2; i <= 150; i++) {
  if (i % 3 === 0) {
    count++;
    if (count === 50) {
      console.log("Mensagem secreta!");
    }
  }
}
