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
