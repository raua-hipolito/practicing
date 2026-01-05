const input = require("readline-sync");

const vogais = ["a", "e", "i", "o", "u"];

let inputTest = input.question("Digite uma letra: ").toLowerCase();

function verificaVogais() {
  if (vogais.includes(inputTest)) {
    console.log("É uma vogal");
  } else {
    console.log("É uma consoante");
  }
}

verificaVogais();
