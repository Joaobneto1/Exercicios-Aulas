// objeto
const pessoa = {
  nome: "Jess",
  idade: 27,
  stack: "Fullstack",
};

const endereco = {
  cidade: "Piraju",
  estado: "sp",
};
const novoObjPessoa = { ...pessoa, formacao: "Faculdade", ...endereco };
console.log(novoObjPessoa);

// array
const numeros1 = [2, 8, 8, 7, 9, 10];

const numeros2 = [20, 58, 90, 96];

const novoArrayNumeros = [...numeros1, 50, 80, ...numeros2];
console.log(novoArrayNumeros);
