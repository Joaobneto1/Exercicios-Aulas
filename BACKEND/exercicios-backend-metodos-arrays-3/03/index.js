const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const resultado = numeros.reduce((acumulador, valorAtual, indice, array) => {
    if (acumulador < valorAtual) {
        acumulador = valorAtual;
    }
    return acumulador;
});

console.log(resultado);