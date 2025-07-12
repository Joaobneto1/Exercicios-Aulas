const pessoa = {
    nome: "Joao",
    altura: 1.85,
    peso: 65
};

pessoa.nome = "Pedro" // pessoa["nome"] = "Pedro";, pessoa["altura"] = 1.80; pessoa["peso"] = 70; notação de colchetes

console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.altura}m e peso ${pessoa.peso}kg.`);