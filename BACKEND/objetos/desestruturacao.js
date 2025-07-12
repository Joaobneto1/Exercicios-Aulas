// Desestruturação de objetos - Destructuring 

const pessoa = {
    nome: "Joao",
    idade: 20,
    cidade: "Maceio",
    profissao: "Dev",
};

const { nome, idade, ...outros } = pessoa;

console.log(nome, idade);
console.log(outros);