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

// // ------------------------------// ------------------------------// ------------------------------

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

// ------------------------------// ------------------------------// ------------------------------

// let senha = Number(input.question("Digite sua senha: "));

// if (senha == 1234) {
//   console.log("Acesso permitido");
// } else {
//   console.log("Acesso negado");
// }

// ------------------------------// ------------------------------// ------------------------------

// let user = input.question("Usuário: ");
// let senha = input.question("Digite sua senha:");

// if (user === "Rauã" && senha === "1234") {
//   console.log("Bem vindo(a)!");
// } else {
//   console.log("Usuário ou senha incorreto!");
// }

// ------------------------------// ------------------------------// ------------------------------

// let horario = Number(input.question("Informe o horário(00h à 23h): "));

// if (horario < 0 || horario > 23 || isNaN(horario)) {
//   console.log("Horário inválido");
// } else if (horario >= 8 && horario <= 18) {
//   console.log("Dentro do horário comercial");
// } else {
//   console.log("Fora do horário comercial");
// }

// ------------------------------// ------------------------------// ------------------------------

// let notaFuncionário = 9;

// if (notaFuncionário >= 9) {
//   console.log("Excelente desempenho");
// } else if (notaFuncionário >= 7) {
//   console.log("Bom desempenho");
// } else {
//   console.log("Precisa melhorar");
// }

// ------------------------------// ------------------------------// ------------------------------

// const tempoEmpresa = Number(input.question("Qual é o tempo da empresa: "));

// if (tempoEmpresa < 0 || isNaN(tempoEmpresa)) {
//   console.log("Número inválido");
// } else if (tempoEmpresa >= 2) {
//   console.log("Benefício liberado");
// } else {
//   console.log("Benefício indisponível");
// }

// ------------------------------// ------------------------------// ------------------------------

// const valorCompra = Number(input.question("Qual o valor da compra: "));

// if (valorCompra < 0 || isNaN(valorCompra)) {
//   console.log("Valor inválido");
// } else if (valorCompra >= 200) {
//   console.log(`Valor da compra R$${valorCompra.toFixed(2)}(Frete grátis)`);
// } else {
//   console.log("Frete será calculado");
// }

// ------------------------------// ------------------------------// ------------------------------

// const statusPagamento = input
//   .question("Qual o status de pagamento(Pago ou pendente): ")
//   .toLowerCase();

// if (statusPagamento === "pago") {
//   console.log("Pedido liberado para envio");
// } else if (statusPagamento === "pendente") {
//   console.log("Aguardando pagamento");
// } else {
//   console.log("Status inválido");
// }

// ------------------------------// ------------------------------// ------------------------------

// const profile = input.question("Digite seu perfil: ").toLowerCase();

// if (profile === "admin") {
//   console.log("Acesso total");
// } else if (profile === "editor") {
//   console.log("Acesso parcial");
// } else if (profile === "visitante") {
//   console.log("Acesso limitado");
// } else {
//   console.log("Usuário não identicado");
// }

// ------------------------------// ------------------------------// ------------------------------

// const estoque = Number(input.question("Qual a quantidade de estoque: "));

// if (estoque < 0 || isNaN(estoque)) {
//   console.log("Quantidade inválida");
// } else if (estoque > 0) {
//   console.log("Produto disponível");
// } else {
//   console.log("Produto esgotado");
// }

// ------------------------------// ------------------------------// ------------------------------

// const experiencia = input
//   .question("Você possui experiência? (sim ou nao): ")
//   .toLowerCase();

// if (experiencia === "sim") {
//   console.log("Avançar para entrevista técnica");
// } else if (experiencia === "nao" || experiencia === "não") {
//   console.log("Encaminhar para teste prático");
// } else {
//   console.log("Resposta inválida");
// }

// ------------------------------// ------------------------------// ------------------------------

const verificaEmail = input.question("Digite seu email: ");

if (verificaEmail.includes("@")) {
  console.log("E-mail válido");
} else {
  console.log("E-mail inválido");
}
