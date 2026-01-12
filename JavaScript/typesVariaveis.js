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

// const nomeUsuario = input.question("Insira seu nome: ");
// const idadeUsuario = Number(input.question("Insira sua idade: "));

// console.log(`Olá, meu nome é ${nomeUsuario} e tenho ${idadeUsuario} anos.`);

// // ------------------------------// // ------------------------------// // ------------------------------

// const number1 = Number(input.question("Insira um número: "));
// const number2 = Number(input.question("Insira outro número: "));

// let soma = number1 + number2;

// let message = `A soma de ${number1} + ${number2} é igual a ${soma}.`;

// console.log(message);

// // ------------------------------// // ------------------------------// // ------------------------------

// const nomeAluno = input.question("Insira seu nome: ");
// const notaAluno = Number(input.question("insira sua nota: "));

// let mensagem = `O aluno ${nomeAluno} tirou a nota ${notaAluno}`;

// console.log(mensagem);

// // ------------------------------// // ------------------------------// // ------------------------------

// const nomeProduto = input.question("Insira o nome do produto: ");
// const precoDoProduto = Number(input.question("Insira o preço do produto: "));

// console.log(`o produto ${nomeProduto} custa R$${precoDoProduto.toFixed(2)}`);

// // ------------------------------// // ------------------------------// // ------------------------------

const hora = Number(input.question("Qual o horário atual(0 a 23)?: "));

console.log(`Agora são ${hora} horas.`);
