const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];

let programadorJovem = pessoas.filter(element => element.idade > 20 && element.profissao == "Programador");

let idadeJornalista = pessoas.filter(element => element.idade > 30 && element.profissao == "Jornalista");

let idadeJovens = pessoas.filter(element => element.idade < 29);

console.log(programadorJovem);
console.log(idadeJornalista);
console.log(idadeJovens);