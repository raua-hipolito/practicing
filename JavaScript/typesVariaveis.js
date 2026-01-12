const input = require("readline-sync");

// const firstname = "Rauã";
// let lastname = "Hipólito";
// let age = 21;
// age = 21;
// console.log(firstname + " " + lastname + " Sua idade:" + age);

// console.log(`Bem vindo ${firstname + " " + lastname}`);
// // ------------------------------// // ------------------------------// // ------------------------------// // ------------------------------

// const product = "iphone15";
// const price = 2500;
// const discont = 10;

// const messege = `
// Produto: ${product}
// Preço: ${price}
// Desconto: ${discont}%
// Preço com desconto: ${price - price * (discont / 100)}`;

// console.log(messege);

// // ------------------------------// // ------------------------------// // ------------------------------

const nomeUsuario = input.question("Insira seu nome: ");
const idadeUsuario = Number(input.question("Insira sua idade: "));

console.log(`Olá, meu nome é ${nomeUsuario} e tenho ${idadeUsuario} anos.`);
