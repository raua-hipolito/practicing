// Array é uma coleção de dados
const pizzas = [
  "4 queijos",
  "frango com catupiry",
  "alho",
  "chocolate",
  "pepperoni",
];

console.log(pizzas[3]);

// Adicionando um valor a um array

const listaDeCompras = ["arroz", "feijão", "ovo"];

listaDeCompras.push("farofa");

console.log(listaDeCompras);

// ------------------------------// ------------------------------// ------------------------------

const titulosCopaDoMundo = [1958, 1962, 1970, 1994];

titulosCopaDoMundo[4] = 2002;

console.log(titulosCopaDoMundo);

// Substituindo um item em um array

const estadosNorte = [
  "Acre",
  "Amapá",
  "Amazonas",
  "Paraná",
  "Rondônia",
  "Roraima",
  "Tocantins",
];

estadosNorte[3] = "Pará";
console.log(estadosNorte);

// ------------------------------// ------------------------------// ------------------------------

const ingredientes = ["arroz", "batata", "cenoura", "sal", "pimenta do reino"];

ingredientes[2] = "suco";

console.log(ingredientes);

// De olho na dica 👀 : Para facilitar a manipulação de listas, sem precisar escrevê-las do zero quando quiser substituir um valor, utilize o índice do item que você quer substituir.

// Recuperando o tamanho de um array

const convidados = [
  "Sheila",
  "Cleyton",
  "Leticia",
  "Gisele",
  "Vinicius",
  "Ivan",
  "Laura",
  "Guilherme",
  "Erickson",
  "Claudio",
  "Adilson",
  "Juliana",
];

const quantidadePessoas = convidados;

convidados.push("Evelyn");

console.log(convidados);
console.log(quantidadePessoas.length);
