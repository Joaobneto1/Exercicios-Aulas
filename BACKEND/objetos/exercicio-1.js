const pessoa = {
    nome: "Joao",
    idade: 20,
    altura: 1.85,
    temCNH: true,
    apelidos: ["Jao", "Batista"]
};

const textoCNH = pessoa.temCNH ? "possui CNH" : "não possui CNH";

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m, ${textoCNH} e tem os seguinta apelidos:`);
for (let apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`);
}