let nome = "Rauã";
let data = 2003;
let ano = 2026;

function CalculaIdade(anoAtual, dataNascimento) {
  return anoAtual - dataNascimento;
}

const resultado = CalculaIdade(ano, data);

if (resultado >= 18) {
  console.log("Pode votar!");
} else {
  console.log("Não pode votar!");
}
