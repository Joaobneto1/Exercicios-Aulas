const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

const somaArrayPar = numeros.filter(number => number % 2 == 0).reduce((acumulador, valorInicial) => acumulador + valorInicial, 0);

console.log(somaArrayPar);
