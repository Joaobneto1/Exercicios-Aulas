// objetos
const pessoa = {
  nome: "Jess",
  idade: 27,
  stack: "Fullstack",
};
// const nome = pessoa.nome
// const idade = pessoa.idade
// const stack = pessoa.stack
const { nome, idade, stack } = pessoa;
console.log(nome, idade, stack);

// arrays
const idades = [10, 20, 30, 55, 68];

const [joazinho, maria, jorge, ze, margarida] = idades;
console.log(joazinho, maria, jorge, ze, margarida);
