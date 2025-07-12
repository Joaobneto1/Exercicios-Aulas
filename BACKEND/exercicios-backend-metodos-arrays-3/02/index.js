const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const comprimento = cidades.reduce((acumulador, valorAtual, indice, array) => {
    if ((acumulador.length < valorAtual.length)) {
        acumulador = valorAtual;
    }
    return acumulador;
});

console.log(comprimento);