const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];

const nomeFiltrado = nomes.filter(function (nome) {
    return nome[0] === "a" || nome[0] === "A"
});

console.log(nomeFiltrado);